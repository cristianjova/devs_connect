import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisable] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Agregar experiencia</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Agrega cualquier posición
        relacionada a programación que hayas tenido
      </p>

      <small>(*) - Campos Obligatorios</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            placeholder='* Puesto'
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='company'
            placeholder='* Compañia'
            value={company}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='location'
            placeholder='Ubicación'
            value={location}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <h4>Fecha inicio</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={e => {
                setFormData({ ...formData, current: !current });
                toggleDisable(!toDateDisabled);
              }}
            />{' '}
            Trabajo Actual
          </p>
        </div>

        <div className='form-group'>
          <h4>Fecha Fin</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? 'disable' : ''}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Descripción del puesto'
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>

        <input type='submit' value='Guardar' className='btn btn-primary my-1' />
        <Link to='/dashboard' className='btn'>
          Volver
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
