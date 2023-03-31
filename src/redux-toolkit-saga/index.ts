import { all, fork } from "redux-saga/effects";
import { reducer as counter, saga as counterSaga } from "./app/counter";
// import { reducer as network}  from "./dao-test/dao-reducer"

export const rootReducer = {
  counter,
};

export function* rootSaga() {
  yield all([
    fork(counterSaga),
  ]);
}
