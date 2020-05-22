import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import service from "./service";

const rootReducer = combineReducers({
  user,
  post,
  service,
});

export default rootReducer;
