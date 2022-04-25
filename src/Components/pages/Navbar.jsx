import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const { token } = useContext(AuthContext);

  // use token to chnage the text from Login to Logout once logged in successfully

  const Nav = styled.div`
    width: 100%;
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    background:darkorange;
    font-size: 20px;
    padding: 20px;
  `;
  const Button = styled.button`
    font-size: 20px;
    border: none;
    background: transparent;
  `;

  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <Link to='/'>
          <Button> Home</Button>
        </Link>
        <Link to='about'>
          <Button>About</Button>{' '}
        </Link>
        <Link to='books'>
          <Button> Books</Button>{' '}
        </Link>
        <Link to={token ? '/logout' : '/login'}>
          {' '}
          <Button>{token ? 'Logout' : 'Login'} </Button>{' '}
        </Link>
      </Nav>
    </>
  );
};
