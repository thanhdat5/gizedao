import { all, fork } from "redux-saga/effects";
import { reducer as counter, saga as counterSaga } from "./app/counter";

export const rootReducer = {
  counter,
};

export function* rootSaga() {
  yield all([
    fork(counterSaga),
  ]);
}
