import { StyleLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyleLink to="/">Home</StyleLink>
        </li>
        <li>
          <StyleLink to="add">Add</StyleLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
