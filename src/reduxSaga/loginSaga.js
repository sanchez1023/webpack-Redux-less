import { delay, request } from "redux-saga";
import { put, call, all } from "redux-saga/effects";
import { takeEvery } from 'redux-saga/effects';
import { databaseConfig } from "../config";
import axios from 'axios';
import { paneltemplete } from "../config"
import { LOGIN_ASYNC, LOGIN_RESPONSE, LOGIN_USER, DATABASE_ERROR, GETCARD_RESPONSE, GETCARD_ASYNC } from "../constants/actionTypes";
import auth from "../Usercontroller";
import { browserHistory } from "../store";
import { withRouter } from 'react-router-dom'



export function* getCardAsync(action) {
    try {
        console.log("data i  sag   " + JSON.stringify(action.payload))
        yield put({ type: GETCARD_ASYNC });

        const response = yield call(retriveCard => auth.retriveCard())
        console.log('respone in saga' + JSON.stringify(response));


        yield put({ type: GETCARD_RESPONSE, payload: response.data })

    }
    catch (error) {
        console.log("error in  login ogf grt  vvvvdvd saga--- card " + JSON.stringify(error.response))
        yield put({ type: DATABASE_ERROR, payload: error })
    }

}


export function* watchgetcard() {
    console.log("in watch function ");
    yield takeEvery('GET_CARDS', getCardAsync);
}
export function* loginAsync(action) {
    try {
        console.log("data i  sag   " + JSON.stringify(action.payload))
        yield put({ type: LOGIN_ASYNC });

        const response = yield call(login => auth.login(action.payload))
        //     console.log('respone in saga' + JSON.stringify(response));
        //   paneltemplete.prototype.status(response.data.status)
        //   console.log("tetettttetettt..."+paneltemplete.prototype.status)
        console.log("response in fsaga--" + response);
        browserHistory.push('/loading')
        yield put({ type: LOGIN_RESPONSE, payload: response.data })


    }
    catch (error) {
        console.log("error in saga--- " + error)
        yield put({ type: DATABASE_ERROR, payload: error.response.data })
    }

}



export function* watchLoginuser() {
    console.log("in watch function ");
    yield takeEvery('LOGIN_USER', loginAsync);
}


export default function* rootSaga() {
    console.log('in root saga')
    yield all([
        watchLoginuser(),
        watchgetcard()

    ])
}
