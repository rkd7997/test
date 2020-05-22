import { all, fork } from 'redux-saga/effects';
import user from './user';
import post from './post';
import service from './service';
import investments from "./investments";

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(post),
    fork(service),
    fork(investments),
  ]);
}
