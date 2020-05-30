import { combineReducers } from 'redux';
import user from './user';
import chart from './chart';
import service from "./service";
import investments from "./investments";
import results from "./results";
import exchange from "./exchange";

const rootReducer = combineReducers({
  user,
  chart,
  service,
  investments,
  results,
  exchange,
});

export default rootReducer;
