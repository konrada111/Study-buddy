import React, { useState, useContext } from 'react';
import { StyledTitle, StyledList, Wrapper } from 'components/organism/UsersList/UsersList.style';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from './Root';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleNewUser } = useContext(UsersContext);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleNewUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <Wrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new student: </StyledTitle>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="name" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="name" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button>Add</Button>
    </Wrapper>
  );
};

export default AddUser;
