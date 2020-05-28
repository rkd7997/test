import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_TRANSACTION_HISTORY_REQUEST,
  LOAD_TRANSACTION_HISTORY_SUCCESS,
  LOAD_TRANSACTION_HISTORY_FAILURE,
} from '../reducers/exchange';
import {LOAD_USER_TRANSACTION_HISTORY_FAILURE} from "../reducers/investments";

function transactionHistoryAPI() {
  return {
    data: [
      {
        id: 3,
        time: '28일 21시 32분',
        unit: '10000',
        result: '매도'
      }
      ,
      {
        id: 2,
        time: '28일 21시 31분',
        unit: '10000',
        result: '매도'
      },
      {
        id: 1,
        time: '13일 19시 56분',
        unit: '10000',
        result: '매도'
      }
    ]
  }
}

function* transactionHistory() {
  try {
    const result = yield call(transactionHistoryAPI);
    yield delay(100);
    yield put({
      type: LOAD_TRANSACTION_HISTORY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_TRANSACTION_HISTORY_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
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
