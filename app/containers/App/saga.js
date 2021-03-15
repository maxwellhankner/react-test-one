import { put, call, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from './constants';
import { dataLoaded, dataLoadingError } from './actions';
import request from '../../utils/request';

export function* getData() {
  try {
    const requestURL = '/api/data';
    const data = yield call(request, requestURL);

    yield put(dataLoaded(data));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_DATA, getData);
}
