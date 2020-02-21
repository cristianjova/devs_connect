import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
        {!to ? 'Ahora' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Puesto:</strong>
        {title}
      </p>
      <p>
        <strong>Descripción:</strong>
        {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
