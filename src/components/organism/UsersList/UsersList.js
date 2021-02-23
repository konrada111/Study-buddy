import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { StyledList, Wrapper } from './UsersList.style';

class UsersList extends React.Component {
  state = {
    isUsersList: true,
  };

  toggleListTitle = () => {
    this.setState((prevState) => ({
      isUsersList: !prevState.isUsersList,
    }));
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? `User's List` : `Student's List`}</h1>
        <button onClick={this.toggleListTitle}>Change tittle</button>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
