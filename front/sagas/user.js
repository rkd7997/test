import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function loginAPI() {
  // 서버에 요청을 보내는 부분
  // return axios.post('/login');
  return {
    data: {
      nickname: '강준호',
      money: 5000000,
      location: '삼성점',
      // Post: [],
      // Followings: [],
      // Followers: [],
      // id: 1,
    }
  }
}

function* login() {
  try {
    const result = yield call(loginAPI);
    yield delay(2000);
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({ e, type: LOG_IN_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function logoutAPI() {
  // 서버에 요청을 보내는 부분
  // return axios.post('/logout');
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield delay(2000);
    yield put({ // put은 dispatch 동일
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({ e, type: LOG_OUT_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

function signUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    throw new Error('에러에러에러');
    yield put({ // put은 dispatch 동일
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({ e, type: SIGN_UP_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignUp),
  ]);
}
