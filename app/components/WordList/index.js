import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import List from '../List';
import ListItem from '../ListItem';

function WordList({ data, loading, error }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (data !== false) {
    return <List items={data} component={ListItem} />;
  }

  return null;
}

WordList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default WordList;
