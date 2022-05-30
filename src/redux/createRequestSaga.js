import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import {startLoading, finishLoading} from "./modules/loading";

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
}

const createRequestSaga = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  const successAction = createAction(SUCCESS, response => response.data, response => response);
  const failureAction = createAction(FAILURE, e => e)

  return function* ({payload}) {
    yield put(startLoading(type));

    try {
      let response = yield call(request, payload);

      if(response?.data?.r !== '000') { throw {response} }

      yield put(successAction(response.data));
    } catch (e) {
      console.error(e)
      const message = {rd : 'Something went wrong', ...e?.response?.data}
      yield put(failureAction(message))
    }

    yield put(finishLoading(type));
  }
}

export default createRequestSaga;
