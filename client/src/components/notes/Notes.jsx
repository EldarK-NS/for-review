import React, { useState, useEffect } from 'react';
import Note from './Note/Note';
import { useSelector, useDispatch } from 'react-redux';
import { getNotesByType } from '../../store/actions/notes';

const Notes = ({ setCurrentId }) => {
  // const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);

  const allData = useSelector((state) => state.allData);
  useEffect(() => {
    if (!localStorage.getItem('searchParams')) {
      setNotes(allData.notes);
    } else {
      setNotes(allData.searchedNotes);
    }
  }, [allData]);

  return (
    <div>
      {notes.length === 0 ? (
        <h1>Your notes ....</h1>
      ) : (
        notes.map((item) => {
          return (
            <Note
              title={item.title}
              descr={item.content}
              key={item._id}
              image={item.selectedFile}
              setCurrentId={setCurrentId}
              noteId={item._id}
              executed={item.executed}
            />
          );
        })
      )}
    </div>
  );
};

export default Notes;
