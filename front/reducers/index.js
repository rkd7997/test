import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import chart from './chart';


const rootReducer = combineReducers({
  user,
  post,
  chart,
});

export default rootReducer;
