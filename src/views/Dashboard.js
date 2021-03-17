import React, { useContext } from 'react';
import UsersList from 'components/organism/UsersList/UsersList';
import { UsersContext } from './Root';

import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
