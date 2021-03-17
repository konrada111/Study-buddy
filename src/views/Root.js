import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UsersProvider from 'providers/UsersProvider';
import { Wrapper } from './Root.style';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

//metoda która przyjmuje domyslna wartosc naszego kontekstu warto ja zawsze tworzyc aby okreslic poczatkowy kształt naszego kontekstu zanim napdpiszemy ja wewnatrz komponentu
export const UsersContext = React.createContext({
  users: [],
  handleNewUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
