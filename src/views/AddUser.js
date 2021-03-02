import React, { useState, useEffect } from 'react';

import { StyledTitle, StyledList, Wrapper } from 'components/organism/UsersList/UsersList.style';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const AddUser = ({ handleNewUser, handleInputChange, formValues }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleNewUser}>
        <StyledTitle>Add new student: </StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="name" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="name" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button>Add</Button>
      </Wrapper>
    </>
  );
};

export default AddUser;
