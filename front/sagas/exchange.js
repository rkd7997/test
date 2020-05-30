import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_TRANSACTIONS_REQUEST,
  LOAD_TRANSACTIONS_SUCCESS,
  LOAD_TRANSACTIONS_FAILURE,
} from '../reducers/exchange';

function transactionsAPI() {
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

function* transactions() {
  try {
    const result = yield call(transactionsAPI);
    yield delay(100);
    yield put({
      type: LOAD_TRANSACTIONS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_TRANSACTIONS_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchTransactions() {
  yield takeEvery(LOAD_TRANSACTIONS_REQUEST, transactions);
}

export default function* exchangeSaga() {
  yield all([
    fork(watchTransactions),
  ]);
}
