import * as api from '../../api';
import { FETCH_ALL, DELETE, CREATE, EXECUTE, UPDATE, SEARCH } from '../actionTypes';

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getNotesByType = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchNotesByType(searchQuery);
    dispatch({
      type: SEARCH,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    dispatch({
      type: EXECUTE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeNote = (id) => async (dispatch) => {
  try {
    await api.removeNote(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const executeNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.executeNote(id);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
