import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import history from 'utils/history';

import { MainPage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { loadData } from '../../App/actions';

describe('<MainPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should fetch the words on mount', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <MainPage loadMyData={submitSpy} />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('loadMyData', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadMyData).toBeDefined();
      });

      it('should dispatch loadData when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadMyData();
        expect(dispatch).toHaveBeenCalledWith(loadData());
      });
    });
  });
});
