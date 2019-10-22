import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='dashboard.html'>
          {' '}
          <i className='fas fa-code'></i> DevConnector{' '}
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Desarrolladores</a>
        </li>
        <li>
          <a href='register.html'>Registrarse</a>
        </li>
        <li>
          <a href='login.html'>Entrar</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
