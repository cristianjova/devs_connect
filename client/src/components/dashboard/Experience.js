import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Experience = ({ experience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Ahora'
        ) : (
          <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Eliminar</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Experiencia</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Compañia</th>
            <th className='hide-sm'>Puesto</th>
            <th className='hide-sm'>Años</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default Experience;
