import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
import {
 CHART_DATA_UPDATE,
 CHART_DATA_SUCCESS,
 CHART_DATA_FAILURE
} from '../reducers/chart';

function* Update(action) {
  try {
    // yield call(loginAPI);
    // yield delay(2000);
    yield put({ // put은 dispatch 동일
      type: CHART_DATA_SUCCESS,
      data: action.data
    });
  } catch (e) { // loginAPI 실패
    yield put({ e, type: CHART_DATA_FAILURE, reason: e.response && e.response.data.reason || 'Server Error' });
  }
}

function* watchUpdate() {
  yield takeEvery(CHART_DATA_UPDATE, Update);
}

export default function* chartSaga() {
  yield all([
    fork(watchUpdate),
  ]);
}
