import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisable] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Agregar Estudios</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Agrega titulo o certificación que
        tengas
      </p>

      <small>(*) - Campos Obligatorios</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='school'
            placeholder='* Escuela o Bootcamp'
            value={school}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='degree'
            placeholder='* Grado o Certicación'
            value={degree}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='fieldofstudy'
            placeholder='Campo de Estudio'
            value={fieldofstudy}
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
            Estudio Actual
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
            placeholder='Descripción de la carrera o curso'
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
