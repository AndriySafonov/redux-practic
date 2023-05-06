import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsers } from 'redux/users/usersSlice';

const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name: e.target.name.value,
      age: e.target.age.value,
    };
    dispatch(addUsers(newUser));
    navigate('/');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};
export default AddUserPage;
