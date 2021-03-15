import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props) {
  return <h2>{props.children}</h2>;
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
