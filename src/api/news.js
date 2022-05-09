import {publicClient} from "../utils/client";

export const getNewsList = (data) => {
  const requestData = {};

  const code = +data.code;
  const codeName = data.codeName;
  if(code < 100) {
    requestData['search_target'] = codeName;
  } else {
    requestData['category'] = codeName;
  }

  return publicClient.post('/v1/contents/news', requestData);
};
export const getNewsDetail = (data) => {
  return publicClient.post('/v1/contents/newsdetail', data);
};
