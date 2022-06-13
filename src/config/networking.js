import {emptyBookmark, getSearch, initializeBookmark, initializeDetail, initializeList} from "../redux/modules/news";

export const networking = (dispatch) => ({
  'LIST_INIT': (data) => {
    console.log('LIST_INIT', data);
    dispatch(initializeList(data));
  },
  'SEARCH_KEYWORD': (data) => {
    console.log('SEARCH_KEYWORD', data);
    dispatch(getSearch(data));
  },
  'BOOKMARK_INIT': (data) => {
    console.log('BOOKMARK_INIT', data);
    if(!data.idsk.length) {
      dispatch(emptyBookmark(data))
    } else {
      dispatch(initializeBookmark(data))
    }
  },
  'DETAIL_INIT': (data) => {
    console.log('DETAIL_INIT', data);
    dispatch(initializeDetail(data));
  }
})
