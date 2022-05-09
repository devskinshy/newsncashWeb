import {combineReducers} from "redux";

import loading from './modules/loading';
import news from './modules/news';

import {all} from "redux-saga/effects";
import {listSaga} from "./modules/news";

const rootReducer = combineReducers({
  loading,
  news
});

export function* rootSaga() {
  yield all([listSaga()]);
}

export default rootReducer;
