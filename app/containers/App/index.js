import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage/Loadable';
import AddPage from 'containers/AddPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  useInjectSaga({ key: 'App', saga });

  return (
    <AppWrapper>
      <Helmet titleTemplate="Word List" defaultTitle="Word List">
        <meta name="description" content="Create a list of words" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/add" component={AddPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
