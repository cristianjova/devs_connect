import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Ahora'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Eliminar</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Estudios</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Instituto</th>
            <th className='hide-sm'>Carera</th>
            <th className='hide-sm'>Años</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired
};

export default Education;
