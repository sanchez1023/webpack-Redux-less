import { delay, request } from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import { databaseConfig } from "../config";

function* ageUpAsync() {
    yield request(databaseConfig.API, data);
    yield put({ type: "LOGIN_ASYNC", value: 1 });
}

export function* watchAgeUp() {
    yield takeLatest("LOGIN_USER", ageUpAsync);
}