import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn'>
        <div className='fas fa-user-circle text-primary'></div> Editar Perfil
      </Link>
      <Link to='/add-experience' className='btn'>
        <div className='fab fa-black-tie text-primary'></div> Agregar
        Experiencia
      </Link>
      <Link to='/add-education' className='btn'>
        <div className='fas fa-graduation-cap text-primary'></div> Agregar
        Estudios
      </Link>
    </div>
  );
};

export default DashboardActions;
