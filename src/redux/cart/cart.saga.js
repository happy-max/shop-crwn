import {takeLatest, all, call, put} from 'redux-saga/effects'
import {userActionTypes} from '../user/user.types'
import {clearCart} from "./cart.action"

export function* clearCartSignOut() {
yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut)
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}