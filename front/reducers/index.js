import { combineReducers } from 'redux';
import user from './user';
import chart from './chart';
import service from "./service";
import investments from "./investments";

const rootReducer = combineReducers({
  user,
  chart,
  service,
  investments,
});

export default rootReducer;
