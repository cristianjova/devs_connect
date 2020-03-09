import React, { Fragment } from 'react';

const NotFound = props => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Página No Encontrada
      </h1>
      <p className='large'>La página solicitada no existe</p>
    </Fragment>
  );
};

export default NotFound;
