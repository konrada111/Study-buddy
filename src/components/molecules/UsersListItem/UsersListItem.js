import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DeteleButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.style';
import { UsersContext } from 'views/Root';

const UserListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage averageValue={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>Attendance: {attendance}</p>
      </StyledInfo>
      <DeteleButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
