import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ isSecondary }) => (isSecondary ? '#e7e044' : '#c0c7d6')};
  border-radius: ${({ isSquared }) => (isSquared ? '0px' : '50px')};
  border: none;
  color: white;
`;

const UserListItem = ({ userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </div>
    <StyledButton>X</StyledButton>
    <StyledButton isSecondary isSquared>
      X
    </StyledButton>
  </Wrapper>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
