import { FETCH_ALL, DELETE, CREATE, EXECUTE, UPDATE, SEARCH } from '../actionTypes';

const initialState = {
  notes: [],
  searchedNotes: [],
  showAll: true,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        notes: action.payload,
        showAll: true,
      };
    case SEARCH:
      return {
        ...state,
        searchedNotes: action.payload,
        showAll: false,
      };
    case UPDATE:
    case EXECUTE:
      return {
        ...state,
        notes: state.notes.map((note) => (note._id === action.payload._id ? action.payload : note)),
        searchedNotes: state.searchedNotes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      };
    case CREATE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        searchedNotes: [...state.searchedNotes, action.payload],
      };
    case DELETE:
      return {
        ...state,
        notes: state.notes.filter((item) => item._id !== action.payload),
        searchedNotes: state.searchedNotes.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
