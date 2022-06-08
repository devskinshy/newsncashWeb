import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../createRequestSaga";
import {createActions, handleActions} from "redux-actions";
import {getNewsDetail, getNewsList} from "../../api/news";
import produce from "immer";

const initialState = {
  list: {
    init: false,
    data: []
  },
  search: {
    keyword: '',
    data: []
  },
  bookmark: {
    init: false,
    data: []
  },
  detail: {
    init: false,
    data: null
  },
  error: null
};

const [INITIALIZE_LIST, INITIALIZE_LIST_SUCCESS, INITIALIZE_LIST_FAILURE] = createRequestActionTypes('news/INITIALIZE_LIST');
const [GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE] = createRequestActionTypes('news/GET_SEARCH');
const EMPTY_BOOKMARK = 'news/EMPTY_BOOKMARK';
const [INITIALIZE_BOOKMARK, INITIALIZE_BOOKMARK_SUCCESS, INITIALIZE_BOOKMARK_FAILURE] = createRequestActionTypes('news/INITIALIZE_BOOKMARK');
const [INITIALIZE_DETAIL, INITIALIZE_DETAIL_SUCCESS, INITIALIZE_DETAIL_FAILURE] = createRequestActionTypes('news/INITIALIZE_DETAIL');

export const {news: {initializeList, getSearch, emptyBookmark, initializeBookmark, initializeDetail}} = createActions({
  [INITIALIZE_LIST]: data => data,
  [GET_SEARCH]: data => data,
  [EMPTY_BOOKMARK]: () => {},
  [INITIALIZE_BOOKMARK]: data => data,
  [INITIALIZE_DETAIL]: data => data
});

console.log(typeof initializeList, getSearch, emptyBookmark, initializeBookmark, initializeDetail);
console.log(typeof INITIALIZE_LIST, INITIALIZE_LIST,INITIALIZE_LIST_SUCCESS, INITIALIZE_LIST_FAILURE);

const initializeListSaga = createRequestSaga(INITIALIZE_LIST, getNewsList);
const getSearchSaga = createRequestSaga(GET_SEARCH, getNewsList);
const initializeBookmarkSaga = createRequestSaga(INITIALIZE_BOOKMARK, getNewsList);
const initializeDetailSaga = createRequestSaga(INITIALIZE_DETAIL, getNewsDetail);

export function* listSaga() {
  yield takeLatest(INITIALIZE_LIST, initializeListSaga);
  yield takeLatest(GET_SEARCH, getSearchSaga);
  yield takeLatest(INITIALIZE_BOOKMARK, initializeBookmarkSaga);
  yield takeLatest(INITIALIZE_DETAIL, initializeDetailSaga);
}

const news = handleActions({
  [INITIALIZE_LIST_SUCCESS]: (state, {payload: list}) => {
    return produce(state, draft => {
      draft.list.init = true;
      draft.list.data = list;
    });
  },
  [INITIALIZE_LIST_FAILURE]: (state, {payload: error}) => {
    return produce(state, draft => {
      draft.list.init = true;
      draft.error = error
    });
  },
  [GET_SEARCH]: (state, {payload: keyword}) => {
    return produce(state, draft => {
      draft.search.keyword = keyword;
    });
  },
  [GET_SEARCH_SUCCESS]: (state, {payload: list}) => {
    return produce(state, draft => {
      draft.search.data = list;
    });
  },
  [GET_SEARCH_FAILURE]: (state, {payload: error}) => {
    return produce(state, draft => {
      draft.error = error
    });
  },
  [EMPTY_BOOKMARK]: (state) => {
    return produce(state, draft => {
      draft.bookmark.init = true;
      draft.bookmark.data = initialState.bookmark.data;
    });
  },
  [INITIALIZE_BOOKMARK_SUCCESS]: (state, {payload: list}) => {
    console.log(list)
    return produce(state, draft => {
      draft.bookmark.init = true;
      draft.bookmark.data = list;
    });
  },
  [INITIALIZE_BOOKMARK_FAILURE]: (state, {payload: error}) => {
    return produce(state, draft => {
      draft.bookmark.init = true;
      draft.error = error
    });
  },
  [INITIALIZE_DETAIL]: (state, {payload: detail}) => {
    return produce(state, draft => {
      draft.detail.data = detail;
    });
  },
  [INITIALIZE_DETAIL_SUCCESS]: (state, {payload: detail}) => {
    return produce(state, draft => {
      draft.detail.init = true;
      draft.detail.data = {...state.detail.data, ...detail};
    });
  },
  [INITIALIZE_DETAIL_FAILURE]: (state, {payload: error}) => {
    return produce(state, draft => {
      draft.detail.init = true;
      draft.error = error
    });
  },
}, initialState);

export default news;
