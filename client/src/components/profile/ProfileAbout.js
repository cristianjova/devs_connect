import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>
          Biógrafia de {name.trim().split(' ')[0]}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere
          dignissimos nobis et minima dolorem sed maxime error molestiae
          repellendus.
        </p>
        <div className='line'></div>
      </Fragment>
    )}

    <h2 className='text-primary'>Habilidades</h2>
    <div className='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
