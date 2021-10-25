import React from 'react';
import './note.css';
import { useDispatch } from 'react-redux';
import { removeNote, executeNote } from '../../../store/actions/notes';

const Note = (props) => {
  const { title, descr, image, setCurrentId, noteId, executed } = props;
  const dispatch = useDispatch();

  const handleExecute = () => {
    dispatch(executeNote(noteId));
  };
  const handleRemove = () => {
    dispatch(removeNote(noteId));
  };

  return (
    <div className="note-container">
      <div className="header">
        <div className="title">
          <h3 className={executed ? 'title-text done' : 'title-text'}>{title}</h3>
        </div>
        <div className="buttons">
          <button className="button green" onClick={handleExecute}>
            {executed ? 'Undone' : 'Done'}
          </button>
          <button className="button blue" onClick={() => setCurrentId(noteId)}>
            Upd
          </button>
          <button className="button red" onClick={handleRemove}>
            Del
          </button>
        </div>
      </div>
      <div className="descr">
        {image ? <img src={image} width="50" height="50" className="image" /> : null}
        <div className="content">
          <h5 className={executed ? 'content-text done' : 'content-text'}>{descr}</h5>
        </div>
      </div>
    </div>
  );
};

export default Note;
