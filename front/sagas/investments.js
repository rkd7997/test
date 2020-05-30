import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST,
  LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS,
  LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE,
  LOAD_USER_TRANSACTION_HISTORY_REQUEST,
  LOAD_USER_TRANSACTION_HISTORY_SUCCESS,
  LOAD_USER_TRANSACTION_HISTORY_FAILURE,
} from '../reducers/investments';

function userDepositWithdrawHistoryAPI() {
  return {
    data: [
      {
        id: 2,
        type: '출금',
        time: '2020-05-22 20:22:00.880',
        amount: '10000',
        result: '완료'
      }
      ,
      {
        id: 1,
        type: '입금',
        time: '2020-05-13 18:52:00.880',
        amount: '10000',
        result: '완료'
      }
    ]
  };
}

function* userDepositWithdrawHistory() {
  try {
    const result = yield call(userDepositWithdrawHistoryAPI);
    yield delay(500);
    yield put({
      type: LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchUserDepositWithdrawHistory() {
  yield takeEvery(LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST, userDepositWithdrawHistory);
}

function userTransactionHistoryAPI() {
  return {
    data: [
      {
        id: 2,
        type: '1분매수',
        time: '2020-05-21 11:04:51',
        amount: '2 lot',
        result: '실격'
      }
      ,
      {
        id: 1,
        type: '1분매도',
        time: '2020-05-15 21:03:16',
        amount: '2 lot',
        result: '실현'
      }
    ]
  };
}

function* userTransactionHistory() {
  try {
    const result = yield call(userTransactionHistoryAPI);
    yield delay(100);
    yield put({
      type: LOAD_USER_TRANSACTION_HISTORY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_USER_TRANSACTION_HISTORY_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchUserTransactionHistory() {
  yield takeEvery(LOAD_USER_TRANSACTION_HISTORY_REQUEST, userTransactionHistory);
}

export default function* investmentsSaga() {
  yield all([
    fork(watchUserDepositWithdrawHistory),
    fork(watchUserTransactionHistory),
  ]);
}
