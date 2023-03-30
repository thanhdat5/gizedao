import { all, fork } from "redux-saga/effects";
import { reducer as counter, saga as counterSaga } from "./app/counter";
import getDataNetwork   from "./dao-test/dao-reducer"
// import { reducer as network}  from "./dao-test/dao-reducer"
import getDataNetworkSaga from "./dao-test/dao-saga";

export const rootReducer = {
  counter,
  getDataNetwork
};

export function* rootSaga() {
  yield all([
    fork(getDataNetworkSaga),
    fork(counterSaga),
  ]);
}
