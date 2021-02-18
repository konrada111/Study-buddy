import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData: { name, average, attendance = '0%' } }) => (
  <div>
    <ul>
      <li>
        <div>{average}</div>
        <div>
          <p>{name}</p>
          <p>Attendance: {attendance}</p>
        </div>
        <button>X</button>
      </li>
    </ul>
  </div>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
