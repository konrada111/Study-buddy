import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { StyledList, Wrapper } from './UsersList.style';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]); //useState przyjmuje poczatkowy stan
  const [isLoading, setLoadingState] = useState([]);
  const [isUsersList, setUsersList] = useState(true);

  //useEffect przyjmuje jako pierwszy argument funkcje ,a jako drugi tablice zaleznosci

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));

    //willunmount (kiedy element jest odmontowywany z domu)
    // return () => {
    //   window.removeEventListener('nazwaeventu',funkcja);
    // };
  }, []); //po przecinku jest dodawane jezeli cos ma sie zmienic (didupdate)

  // useEffect(() => {
  //   console.log('Loading state has changed');
  // }, [isLoading]);

  const toggleListTitle = (prevState) => {
    setUsersList(!prevState);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      {/*<h1>{isUsersList ? `User's List` : `Students List`}</h1>*/}
      {/*<button onClick={() => toggleListTitle(isUsersList)}>Change title</button>*/}
      <h1>{isLoading ? `Loading...` : ``}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
