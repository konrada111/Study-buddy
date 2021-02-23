import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = (props) => (
  <>
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  </>
);

Button.propTypes = {};

export default Button;
