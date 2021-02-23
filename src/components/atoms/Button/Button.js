import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: ${({ isSecondary }) => (isSecondary ? '#e7e044' : '#c0c7d6')};
  border-radius: ${({ isSquared }) => (isSquared ? '0px' : '50px')};
  border: none;
  color: white;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = () => (
  <>
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  </>
);

Button.propTypes = {};

export default Button;
