import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  return (
    <div className='post bg-white my-1 p-1'>
      <div>
        <a href='profile.html'>
          <img className='round-img' src={avatar} alt='Avatar' />
          <h4>{name}</h4>
        </a>
      </div>

      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Publicado el <Moment format='DD/MM/YYYY'>{date}</Moment>
        </p>
        <button className='btn'>
          <i className='fas fa-thumbs-up'></i>{' '}
          <span>{likes.length > 0 && likes.length}</span>
        </button>
        <button className='btn'>
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/post/${_id}`} className='btn btn-primary'>
          Ver más{' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(PostItem);
