import React from 'react';
import Navigation from 'components/organism/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
