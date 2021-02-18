import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.action'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import Spinner from '../../components/spinner/spinner.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

const CollectionOverviewSpinner = Spinner(CollectionOverview)
const CollectionPageSpinner = Spinner(CollectionPage)

const ShopPage = ({match, updateCollections}) => {
const [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsubscribeFromSnapshot = null
        const collectionRef = firestore.collection('collections')

        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            setLoading(false)
        })

    }, [updateCollections])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={props => (
                <CollectionOverviewSpinner isLoading={loading} {...props}/>
            )}/>
            <Route path={`${match.path}/:collectionId`}
                   render={props => (
                       <CollectionPageSpinner isLoading={loading} {...props}/>
                   )}/>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
