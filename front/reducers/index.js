import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import service from "./service";
import investments from "./investments";

const rootReducer = combineReducers({
  user,
  post,
  service,
  investments,
});

export default rootReducer;
