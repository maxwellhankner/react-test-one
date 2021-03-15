import produce from 'immer';
import {
  CHANGE_WORD,
  ADD_WORD,
  ADD_WORD_SUCCESS,
  ADD_WORD_ERROR,
} from './constants';

export const initialState = {
  word: '',
  addingWord: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const addPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_WORD:
        draft.word = action.word;
        break;

      case ADD_WORD:
        draft.addingWord = true;
        draft.error = false;
        break;

      case ADD_WORD_SUCCESS:
        draft.addingWord = false;
        draft.error = false;
        draft.word = '';
        break;

      case ADD_WORD_ERROR:
        draft.addingWord = false;
        draft.error = action.error;
        draft.word = '';
        break;
    }
  });

export default addPageReducer;
