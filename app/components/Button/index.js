import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './StyledLink';
import Wrapper from './Wrapper';

function Button({ route, buttonText, primary }) {
  let button;
  if (primary) {
    button = (
      <StyledLink to={route} primary="true">
        {buttonText}
      </StyledLink>
    );
  } else {
    button = <StyledLink to={route}>{buttonText}</StyledLink>;
  }

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  route: PropTypes.string,
  buttonText: PropTypes.string,
  primary: PropTypes.any,
};

export default Button;
