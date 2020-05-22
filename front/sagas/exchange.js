import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_TRANSACTION_HISTORY_REQUEST,
  LOAD_TRANSACTION_HISTORY_SUCCESS,
  LOAD_TRANSACTION_HISTORY_FAILURE,
} from '../reducers/exchange';

function transactionHistoryAPI() {}

function* transactionHistory() {
  try {
    // yield call(transactionHistoryAPI);
    yield delay(100);
    yield put({
      type: LOAD_TRANSACTION_HISTORY_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_TRANSACTION_HISTORY_FAILURE,
      error: e,
    });
  }
}

function* watchTransactionHistory() {
  yield takeEvery(LOAD_TRANSACTION_HISTORY_REQUEST, transactionHistory);
}

export default function* exchangeSaga() {
  yield all([
    fork(watchTransactionHistory),
  ]);
}
