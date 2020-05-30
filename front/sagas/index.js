import { all, fork } from 'redux-saga/effects';
import user from './user';
import chart from './chart'
import service from './service';
import investments from "./investments";
import results from "./results";
import exchange from "./exchange";

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(chart),
    fork(service),
    fork(investments),
    fork(results),
    fork(exchange),
  ]);
}
