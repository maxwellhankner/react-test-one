import { put, call, takeLatest, select, all } from 'redux-saga/effects';
import { makeSelectWord } from 'containers/AddPage/selectors';
import { ADD_WORD } from './constants';
import { wordAdded, wordLoadingError } from './actions';
import request from '../../utils/request';
import { dataLoaded } from '../App/actions';

export function* addWord() {
  try {
    const word = yield select(makeSelectWord());
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word }),
    };
    const requestURL = '/api/data';
    const data = yield call(request, requestURL, options);

    yield all([put(wordAdded(data)), put(dataLoaded(data))]);
  } catch (err) {
    yield put(wordLoadingError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(ADD_WORD, addWord);
}
