import {takeEvery, call, put} from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils'
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.action'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        )
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}