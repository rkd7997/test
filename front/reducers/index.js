import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import chart from './chart';
import service from "./service";
import investments from "./investments";

const rootReducer = combineReducers({
  user,
  post,
  chart,
  service,
  investments,
});

export default rootReducer;
