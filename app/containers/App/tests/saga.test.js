import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_DATA } from 'containers/App/constants';
import { dataLoadingError } from 'containers/App/actions';

import rootSaga, { getData } from '../saga';

const data = ['test'];

describe('getData Saga', () => {
  let getDataGenerator;

  beforeEach(() => {
    getDataGenerator = getData();

    const selectDescriptor = getDataGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getDataGenerator.next(data).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should call the dataLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getDataGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(dataLoadingError(response)));
  });
});

describe('rootSaga Saga', () => {
  const githubDataSaga = rootSaga();

  it('should start task to watch for LOAD_DATA action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_DATA, getData));
  });
});
