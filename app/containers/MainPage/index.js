/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import messages from './messages';
import { loadData } from '../App/actions';
import WordList from '../../components/WordList';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';

export function MainPage({ data, loadMyData, loading, error }) {
  useEffect(() => {
    loadMyData();
  }, []);

  const wordListProps = {
    loading,
    error,
    data,
  };

  return (
    <div>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="List of very important words" />
      </Helmet>
      <PageTitle>
        <FormattedMessage {...messages.header} />
      </PageTitle>
      <WordList {...wordListProps} />
      <Button route="/add" buttonText="add a word" primary />
    </div>
  );
}

MainPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadMyData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadMyData: () => dispatch(loadData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
