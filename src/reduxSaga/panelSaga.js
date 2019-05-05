import { delay, request } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { takeEvery } from 'redux-saga/effects';
import { databaseConfig } from "../config";
import axios from 'axios';
import { LOGIN_ASYNC, LOGIN_RESPONSE, LOGIN_USER, DATABASE_ERROR } from "../constants/actionTypes";

export function* loginAsync(action) {
    try {
        console.log("data i  sag   "+JSON.stringify(action.payload))
        yield put({ type: GETCARD_ASYNC });
       var  header={
            'Content-Type':'application/json',
            'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVjODY1YTc0OWZkNTkxNWFjNjQwZDZhNyJ9LCJpYXQiOjE1NTY5Njg5NjEsImV4cCI6MTU1NzA1NTM2MX0.2DCLq7kgc_xemrCY0HbqjnKdvugDWpu6bRdIotvZLhY'
        }
        const response = yield call(aaxxxx=>axios.get(databaseConfig.getCards,{header:header}))
        console.log('respone in saga' + JSON.stringify(response));
      var a=[]
        yield put({ type: GETCARD_RESPONSE ,payload:a=response.data})

    }
    catch (error) {
        console.log("error in  login saga--- " + error)
        yield put({ type: DATABASE_ERROR, payload: error })
    }

}


export default function* watchgetcard() {
    console.log("in watch function ");
    yield takeEvery('GET_CARDS', getCardAsync);
}
// export default function* rootSaga() {

//     yield [
//         watchLoginuser(),
//     ]yy
// }