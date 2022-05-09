import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../createRequestSaga";
import {createActions, handleActions} from "redux-actions";
import {getNewsDetail, getNewsList} from "../../api/news";
import produce from "immer";

const initialState = {
  list: null,
  detail: null,
  error: null
};

const [INITIALIZE_LIST, INITIALIZE_LIST_SUCCESS, INITIALIZE_LIST_FAILURE] = createRequestActionTypes('news/INITIALIZE_LIST');
const [INITIALIZE_DETAIL, INITIALIZE_DETAIL_SUCCESS, INITIALIZE_DETAIL_FAILURE] = createRequestActionTypes('news/INITIALIZE_DETAIL');

export const {news: {initializeList, initializeDetail}} = createActions({
  [INITIALIZE_LIST]: type => type,
  [INITIALIZE_DETAIL]: type => type
});

const initializeListSaga = createRequestSaga(INITIALIZE_LIST, getNewsList);
const initializeDetailSaga = createRequestSaga(INITIALIZE_DETAIL, getNewsDetail);

export function* listSaga() {
  yield takeLatest(INITIALIZE_LIST, initializeListSaga);
  yield takeLatest(INITIALIZE_DETAIL, initializeDetailSaga);
};

const news = handleActions({
  [INITIALIZE_LIST_SUCCESS]: (state, {payload: list}) => {
    return produce(state, draft => {
      draft.list = list
    });
  },
  [INITIALIZE_LIST_FAILURE]: (state, {payload: error}) => {
    return produce(state, draft => {
      draft.error = error
    });
  },
  [INITIALIZE_DETAIL]: (state, {payload: data}) => {
    return produce(state, draft => {
      draft.detail = {...state.detail, ...data}
    });
  },
  [INITIALIZE_DETAIL_SUCCESS]: (state, {payload: detail}) => {
    return produce(state, draft => {
      draft.detail = {...state.detail, ...detail}
    });
  },
  [INITIALIZE_DETAIL_FAILURE]: (state, {payload: error}) => {
    return produce(state, draft => {
      draft.error = error
    });
  },
}, initialState);

export default news;
