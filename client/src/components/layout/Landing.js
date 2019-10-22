import React from 'react';

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
            <a href='register.html' className='btn btn-primary'>
              Registrate
            </a>
            <a href='login.html' className='btn'>
              Inicia Sesion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
