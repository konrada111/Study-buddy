import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { StyledTitle, StyledList, Wrapper } from './UsersList.style';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const UsersList = ({ deleteUser, users }) => {
  return (
    <>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
