import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from "../../components/collection-preview/collection-preview"
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'

import'./collection-overview.styles.css'

const CollectionOverview = ({collections}) => (

    <div className='collection-overview'>
        {collections.map(({id, ...restValue}) => (
            <CollectionPreview key={id} {...restValue}/>
        ))}
    </div>

)
const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)
