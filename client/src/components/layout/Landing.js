import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>DevConnector</h1>
          <p className='lead'>
            Crea tu perfil/portfolio de desarrollador, comparti publicaciones y
            recibi o ayuda a otros
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Registrate
            </Link>
            <Link to='/login' className='btn'>
              Inicia Sesion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
