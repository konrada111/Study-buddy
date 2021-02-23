import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { Wrapper } from './UsersList.style';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, i) => (
        <UsersListItem index={i} key={userData.name} userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
