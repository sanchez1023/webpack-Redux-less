import { request } from "redux-saga";
import { put, call, all, delay } from "redux-saga/effects";
import { takeEvery } from 'redux-saga/effects';
import { databaseConfig } from "../config";
import axios from 'axios';
import { paneltemplete } from "../config"
import { LOGIN_ASYNC, LOGIN_RESPONSE, LOGIN_USER, DATABASE_ERROR, GETCARD_RESPONSE, GETCARD_ASYNC, ADDREDIRECT_ASYNC, ADDREDIRECT_RESPONSE, GET_CARDS, UPDATEREDIRECT_ASYNC, UPDATEREDIRECT_RESPONSE, RETRIVE_CARD_ASYNC, RETRIVE_CARD, RETRIVE_CARD_RESPONSE, CLOSE_LOADING } from "../constants/actionTypes";
import auth from "../Usercontroller";
import { browserHistory } from "../store";
import { withRouter } from 'react-router-dom'



export function* getCardAsync(action) {
    try {
        console.log("data i  sag   " + JSON.stringify(action.payload))
        yield put({ type: GETCARD_ASYNC });

        const response = yield call(retriveCard => auth.retriveCard())



        yield put({ type: GETCARD_RESPONSE, payload: response.data })
        console.log('respone in saga' + JSON.stringify(response));
        yield delay(8000)
        yield put({ type: CLOSE_LOADING })


    }
    catch (error) {
        console.log("error in  get card ogf grt  vvvvdvd saga--- card " + JSON.stringify(error.response))
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


        yield put({ type: LOGIN_RESPONSE, payload: response.data })

        


    }
    catch (error) {
        console.log("error in saga--- " + error)
        yield put({ type: DATABASE_ERROR, payload: error.response.data })
    }

}
export function* getRetrive(action) {
    yield put({ type: RETRIVE_CARD_ASYNC })

    const response = yield call(retrive => auth.retriveCard())
    console.log('respone in saga' + JSON.stringify(response));


    yield put({ type: RETRIVE_CARD_RESPONSE, payload: response.data })

}

export function* retriveCard() {
    console.log("in retrive ctd eatch funtion")
    yield takeEvery('RETRIVE_CARD', getRetrive)
}

export function* watchLoginuser() {
    console.log("in watch function ");
    yield takeEvery('LOGIN_USER', loginAsync);
}
export function* watchAddredirect() {
    console.log("in watch function of add redirect ");
    yield takeEvery('ADD_REDIRECT', redirectAsync);
}
export function* watchUpdateredirect() {
    console.log("in watch function ");
    yield takeEvery('UPDATE_REDIRECT', updateredirectAsync);
}
export function* redirectAsync(action) {
    try {
        console.log("data i  sag   " + JSON.stringify(action.payload))
        yield put({ type: ADDREDIRECT_ASYNC });

        const response = yield call(login => auth.redirectAdd(action.payload))
        //     console.log('respone in saga' + JSON.stringify(response));
        //   paneltemplete.prototype.status(response.data.status)
        //   console.log("tetettttetettt..."+paneltemplete.prototype.status)
        console.log("response in fsaga--" + response);


        // browserHistory.push('/loading')
        yield put({ type: ADDREDIRECT_RESPONSE, payload: response.data });
        yield put({
            type: RETRIVE_CARD
        })
        // yield put({ type: GET_CARDS });


    }
    catch (error) {
        console.log("error in saga--- " + error)
        yield put({ type: DATABASE_ERROR, payload: error.response })
    }

}
export function* updateredirectAsync(action) {
    try {
        console.log("data i  sag   " + JSON.stringify(action.payload))
        yield put({ type: UPDATEREDIRECT_ASYNC });

        const response = yield call(login => auth.updateRedirect(action.payload))
        //     console.log('respone in saga' + JSON.stringify(response));
        //   paneltemplete.prototype.status(response.data.status)
        //   console.log("tetettttetettt..."+paneltemplete.prototype.status)
        console.log("response in fsaga--" + response);

        yield put({ type: UPDATEREDIRECT_RESPONSE, payload: response.data })
        yield put({
            type: RETRIVE_CARD
        })


    }
    catch (error) {
        if (error.data !== undefined) {
            console.log("error in saga--- " + error)
            yield put({ type: DATABASE_ERROR, payload: error.response.data })
        }
    }

}


export default function* rootSaga() {
    console.log('in root saga')
    yield all([
        watchLoginuser(),
        watchgetcard(),
        watchAddredirect(),
        watchUpdateredirect(),
        retriveCard()


    ])
}
