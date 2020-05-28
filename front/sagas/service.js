import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
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
  return {
    data: [
      {
        id: 2,
        subject: '두번째 공지사항입니다.',
        content: '공지사항입니다. 공지사항입니다.',
        regDate: '2020-05-28',
        hit: 11995,
      }
      ,
      {
        id: 1,
        subject: '공지사항입니다.',
        content: '공지사항입니다. 공지사항입니다.',
        regDate: '2020-05-21',
        hit: 9997,
      }
    ]
  };
}

function* announcements() {
  try {
    const result = yield call(announcementsAPI);
    yield delay(100);
    yield put({
      type: LOAD_ANNOUNCEMENTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_ANNOUNCEMENTS_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchAnnouncements() {
  yield takeEvery(LOAD_ANNOUNCEMENTS_REQUEST, announcements);
}

function newsAPI() {
  // return axios.get('/news');
  return {
    data: [
      {
        id: 3,
        subject: '새로운 뉴스.',
        content: '뉴스입니다. 뉴스입니다.',
        regDate: '2020-05-28',
        hit: 1098,
      }
      ,
      {
        id: 2,
        subject: '두번째 뉴스입니다.',
        content: '뉴스입니다. 뉴스입니다.',
        regDate: '2020-05-25',
        hit: 1051,
      }
      ,
      {
        id: 1,
        subject: '뉴스입니다.',
        content: '뉴스입니다. 뉴스입니다.',
        regDate: '2020-05-21',
        hit: 995,
      }
    ]
  };
}

function* news() {
  try {
    const result = yield call(newsAPI);
    yield delay(100);
    yield put({
      type: LOAD_NEWS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ e, type: LOAD_NEWS_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
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
