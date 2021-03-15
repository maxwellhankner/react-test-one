import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;

  ${props =>
    props.forAdding &&
    css`
      margin: 0;
      position: absolute;
      right: -40px;
      top: 0px;
      width: 30px;
      height: 30px;
    `};
`;

export default Wrapper;
