import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.style';

const displayIndex = (index) => alert(index);

const UserListItem = ({ index, userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage averageValue={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </StyledInfo>
    <Button onMouseEnter={() => displayIndex(index + 1)} />
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
