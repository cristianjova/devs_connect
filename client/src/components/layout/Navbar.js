import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profiles'>Desarrolladores</Link>
        </li>
        <li>
          <Link to='/register'>Registrarse</Link>
        </li>
        <li>
          <Link to='/login'>Entrar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
