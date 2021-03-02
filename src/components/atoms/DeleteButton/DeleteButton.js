import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './DeleteButton.style';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const DeleteButton = (props) => (
  <>
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  </>
);

DeleteButton.propTypes = {};

export default DeleteButton;
