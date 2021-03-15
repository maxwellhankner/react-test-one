import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 1.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #310078;
  background-color: #310078;
  color: white;

  ${props =>
    props.primary &&
    css`
      color: #310078;
      background-color: unset;
      border: 2px solid #310078;
    `};
`;

export default StyledLink;
