import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };

  return (
    <div className='post-form'>
      <div className='post-form-header bg-primary'>
        <h3>Deja un comentario</h3>
      </div>
      <form className='form my-1' onSubmit={onSubmit}>
        <textarea
          cols='30'
          rows='5'
          placeholder='Escribir comentario'
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <input type='submit' value='Publicar' className='btn btn-dark my-1' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
