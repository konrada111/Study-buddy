import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledLink, Logo } from 'components/organism/Navigation/Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/" exact>
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user/">Add user</StyledLink>
      {/*<StyledLink to="/">Settings</StyledLink>*/}
      {/*<StyledLink to="/">Logout</StyledLink>*/}
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
