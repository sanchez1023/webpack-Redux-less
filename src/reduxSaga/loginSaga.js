import { delay, request } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { takeEvery } from 'redux-saga/effects';
import { databaseConfig } from "../config";
import axios from 'axios';
import { LOGIN_ASYNC, LOGIN_SUCCESS, LOGIN_USER } from "../constants/actionTypes";
export function* loginAsync(action) {
    try {
        yield put({ type: LOGIN_ASYNC });
        const reponse = yield call(axios.post(databaseConfig.API, action.data))
        console.log('respone in saga' + reponse);
        yield put({ type: LOGIN_SUCCESS })

    }
    catch (error) {
        console.log("error in  login saga--- " + error)
    }

}


function* watchLoginuser() {
    console.log("in watch function ");
    yield takeEvery('LOGIN_USER', loginAsync);
}
export default function* rootSaga() {

    yield [
        watchLoginuser(),
    ]
}