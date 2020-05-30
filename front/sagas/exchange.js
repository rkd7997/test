import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_TRANSACTIONS_REQUEST,
  LOAD_TRANSACTIONS_SUCCESS,
  LOAD_TRANSACTIONS_FAILURE,
  LOAD_USER_TRANSACTIONS_REQUEST,
  LOAD_USER_TRANSACTIONS_SUCCESS,
  LOAD_USER_TRANSACTIONS_FAILURE,
} from '../reducers/exchange';

function transactionsAPI() {
  return {
    data: [
      {
        id: 3,
        time: '28일 21시 32분',
        unit: '1.89680',
        result: '진행중'
      }
      ,
      {
        id: 2,
        time: '28일 21시 31분',
        unit: '1.89680',
        result: '실현'
      },
      {
        id: 1,
        time: '28일 19시 56분',
        unit: '1.89680',
        result: '실격'
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

function userTransactionsAPI() {
  return {
    data: [
      {
        id: 3,
        type: '1분매수',
        time: '21일 20시 32분',
        amount: '10000',
        result: '진행중'
      }
      ,
      {
        id: 2,
        type: '1분매도',
        time: '21일 20시 32분',
        amount: '100,000',
        result: '실격'
      }
      ,
      {
        id: 1,
        type: '1분매수',
        time: '21일 19시 56분',
        amount: '100,000',
        result: '실현'
      }
    ]
  };
}

function* userTransactions() {
  try {
    const result = yield call(userTransactionsAPI);
    yield delay(100);
    yield put({
      type: LOAD_USER_TRANSACTIONS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_USER_TRANSACTIONS_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchUserTransactions() {
  yield takeEvery(LOAD_USER_TRANSACTIONS_REQUEST, userTransactions);
}

export default function* exchangeSaga() {
  yield all([
    fork(watchTransactions),
    fork(watchUserTransactions),
  ]);
}
