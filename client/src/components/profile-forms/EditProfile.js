import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInput, toggleSocialInput] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Crea tu perfil</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Agrega información para completar tu
        perfil
      </p>
      <small>(*) - Campos Obligatorios</small>

      {/* <!-- Form create profile --> */}
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Seleccione su posición o puesto</option>
            <option value='Desarrollador'>Desarrollador</option>
            <option value='Desarrollador Jr.'>Desarrollador Jr.</option>
            <option value='Desarrollador Sr.'>Desarrollador Sr.</option>
            <option value='Director'>Director</option>
            <option value='Estudiante o Aprendiz'>Estudiante o Aprendiz</option>
            <option value='Instructor'>Instructor</option>
            <option value='Pasante'>Pasante</option>
            <option value='Otro'>Otro</option>
          </select>
          <small className='form-text'>
            Danos una idea en que punto de tu carrera te encontras
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Compañia'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Puede ser tu propia compañia o una en la que trabajes
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Sitio Web'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Puede ser tu sitio web personal(portfolio/página) o el de la
            compañia en que trabajas
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Ubicación'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ciudad y Provincia (Ej. Resistencia, Chaco)
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Habilidades'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Agrega tus habilidades separadas con coma (Ej. HTML, CSS, PHP)
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Usuario GitHub'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Si queres mostrar tus ultimos repositorios, agrega tu nombre de
            usuario de GitHub
          </small>
        </div>

        <div className='form-group'>
          <textarea
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Contanos un poco acerca de vos!</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInput(!displaySocialInput)}
            type='button'
            className='btn btn-light'
          >
            Añadir Redes Sociales
          </button>
          <span>Opcional</span>
        </div>

        {displaySocialInput && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter-square fa-2x'></i>
              <input
                type='text'
                placeholder='Enlace Twitter'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook-square fa-2x'></i>
              <input
                type='text'
                placeholder='Enlace Facebook'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube-square fa-2x'></i>
              <input
                type='text'
                placeholder='Enlace Youtube'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Enlace Linkedin'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Enlace Instagram'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' value='Guardar' className='btn btn-primary my-1' />
        <Link to='/dashboard' className='btn btn-light'>
          Volver
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

// Added with router to use history of props
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
