import {publicClient} from "../utils/client";

export const getNewsList = async (data) => {
  return await publicClient.post('/v1/contents/news', data);
};

export const getNewsDetail = async (data) => {
  return await publicClient.post('/v1/contents/newsdetail', data)
};
