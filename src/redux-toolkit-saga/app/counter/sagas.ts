import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeLatest } from "redux-saga/effects";
import { getAllCounter } from "services/app/counter-api";
import { ResponseListGenerator } from "types/api/common-response.model";
import { ICounter, ICounterRequest } from "types/counter";
import { increment, incrementAct, decrement, decrementAct } from "./slice";

function* incrementSaga(action: PayloadAction<ICounterRequest>) {
  try {
    const response: ResponseListGenerator<ICounter> = yield getAllCounter(
      action.payload
    );
    if (response) {
      yield put(increment(1));
    } else {
      yield put(increment(0));
    }
  } catch (error) {
    yield put(increment(-1));
  }
}
function* decrementSaga(action: PayloadAction<ICounterRequest>) {
  try {
    const response: ResponseListGenerator<ICounter> = yield getAllCounter(
      action.payload
    );
    if (response) {
      yield put(decrement(1));
    } else {
      yield put(decrement(0));
    }
  } catch (error) {
    yield put(decrement(-1));
  }
}
export default function* counterSaga() {
  yield all([takeLatest(incrementAct.type, incrementSaga)]);
  yield all([takeLatest(decrementAct.type, decrementSaga)]);
}
