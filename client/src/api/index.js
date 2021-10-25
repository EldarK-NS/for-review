import axios from 'axios';
const url = 'https://todo-for-review.herokuapp.com/notes';

export const fetchNotesByType = (searchQuery) =>
  axios.get(`${url}/search?${searchQuery.query}=${searchQuery.search}`);

export const fetchNotes = () => axios.get(url);

export const createNote = (newNote) => axios.post(url, newNote);

export const updateNote = (id, upatedNote) => axios.patch(`${url}/${id}`, upatedNote);

export const removeNote = (id) => axios.delete(`${url}/${id}`);

export const executeNote = (id) => axios.patch(`${url}/${id}/executeNote`);
