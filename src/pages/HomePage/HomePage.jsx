import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/users/usersSelectors';
import { deleteUser } from 'redux/users/usersSlice';

const HomePage = () => {
  const users = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(({ id, name, age }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <button onClick={() =>dispatch(deleteUser(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default HomePage;
