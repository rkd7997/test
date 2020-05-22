import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_ANNOUNCEMENTS_REQUEST,
  LOAD_ANNOUNCEMENTS_SUCCESS,
  LOAD_ANNOUNCEMENTS_FAILURE,
  LOAD_NEWS_REQUEST,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
} from '../reducers/service';

function announcementsAPI() {
  // return axios.get('/announcements');
}

function* announcements() {
  try {
    // yield call(announcementsAPI);
    yield delay(500);
    yield put({
      type: LOAD_ANNOUNCEMENTS_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_ANNOUNCEMENTS_FAILURE,
    });
  }
}

function* watchAnnouncements() {
  yield takeEvery(LOAD_ANNOUNCEMENTS_REQUEST, announcements);
}

function newsAPI() {
  // return axios.get('/news');
}

function* news() {
  try {
    // yield call(newsAPI);
    yield delay(500);
    yield put({
      type: LOAD_NEWS_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_NEWS_FAILURE,
      error: e,
    });
  }
}

function* watchNews() {
  yield takeEvery(LOAD_NEWS_REQUEST, news);
}

export default function* serviceSaga() {
  yield all([
    fork(watchAnnouncements),
    fork(watchNews),
  ]);
}
