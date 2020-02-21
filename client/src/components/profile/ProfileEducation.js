import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
        {!to ? 'Ahora' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Carrera o Curso:</strong>
        {degree}
      </p>
      <p>
        <strong>Campo de Estudio:</strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Descripción:</strong>
        {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
