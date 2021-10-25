import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, updateNote } from '../../store/actions/notes';

import './form.css';

//FIXME: add creator id in the noteData

const Form = ({ currentId, setCurrentId }) => {
  const [noteData, setNoteData] = useState({
    title: '',
    content: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();

  const note = useSelector((state) =>
    currentId ? state.notes.find((item) => item._id === currentId) : null
  );

  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setNoteData({ title: '', content: '', selectedFile: '' });
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>{currentId ? 'Update note' : 'Create a note'}</h2>
        <input
          type="text"
          placeholder="enter title"
          className="input"
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="enter content"
          className="input"
          value={noteData.content}
          onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
        />
        <div className="file-input">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setNoteData({ ...noteData, selectedFile: base64 })}
            className="file-base"
          />
        </div>
        <button className="form-button green" type="submit">
          ADD NOTE
        </button>
      </form>
      <div className="clear-button-wrapper">
        <button onClick={clear} className="form-button red">
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Form;
