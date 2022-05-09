import {initializeDetail, initializeList} from "../redux/modules/news";

export const networking = (dispatch) => ({
  'LIST_INIT': (data) => {
    console.log('LIST_INIT', data);
    dispatch(initializeList(data));
  },
  'DETAIL_INIT': (data) => {
    console.log('DETAIL_INIT', data);
    dispatch(initializeDetail(data));
  },
})
