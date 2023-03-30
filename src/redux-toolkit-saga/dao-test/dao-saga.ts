import { takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { put,call,all } from 'redux-saga/effects';
import { apiCall } from "services/app/api"
import { getNetworkError, getNetworkRequest, getNetworkSuccess } from './dao-reducer';




function* getData(action:any) {
    try {
        const response: AxiosResponse<any> = yield call(apiCall,"GET",'networks',action.payload)
        yield put(getNetworkSuccess(response.data))
    } catch (error) {
        yield put(getNetworkError())
    }
}
export default function* getDataNetworkSaga(){
    yield all([takeLatest(getNetworkRequest.type,getData)])
}