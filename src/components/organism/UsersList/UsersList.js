import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { StyledList, Wrapper } from './UsersList.style';

class UsersList extends React.Component {
  state = {
    users,
    isUsersList: true,
  };

  //odpala sie kiedy nasz komponent zostanie zamontowany w aplikacji(zostaje wyrenderowany po raz pierwszy)
  componentDidMount() {}

  //odpala sie kiedy doszlo do jakiegos update-u (mozemy porownywac poprzednie propsy, poprzednie stany oraz jego cala konstrukcje ktora zawieral)
  componentDidUpdate(prevProps, prevState, snapshot) {}

  //uruchamia sie w momencie kiedy jest odmontowany od naszego domu
  componentWillUnmount() {}

  toggleListTitle = () => {
    this.setState((prevState) => ({
      isUsersList: !prevState.isUsersList,
    }));
  };

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? `Users List` : `Students List`}</h1>
        <button onClick={() => this.toggleListTitle(this.state.isUsersList)}>Change title</button>
        <StyledList>
          {this.state.users.map((userData) => (
            <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
