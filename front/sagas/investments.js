import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST,
  LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS,
  LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE,
  LOAD_USER_TRANSACTION_HISTORY_REQUEST,
  LOAD_USER_TRANSACTION_HISTORY_SUCCESS,
  LOAD_USER_TRANSACTION_HISTORY_FAILURE,
} from '../reducers/investments';

function userDepositWithdrawHistoryAPI() {}

function* userDepositWithdrawHistory() {
  try {
    // yield call(userDepositWithdrawHistoryAPI);
    yield delay(100);
    yield put({
      type: LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE,
    });
  }
}

function* watchUserDepositWithdrawHistory() {
  yield takeEvery(LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST, userDepositWithdrawHistory);
}

function userTransactionHistoryAPI() {}

function* userTransactionHistory() {
  try {
    // yield call(userTransactionHistoryAPI);
    yield delay(100);
    yield put({
      type: LOAD_USER_TRANSACTION_HISTORY_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_TRANSACTION_HISTORY_FAILURE,
      error: e,
    });
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
