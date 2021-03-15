import {
  CHANGE_WORD,
  ADD_WORD,
  ADD_WORD_SUCCESS,
  ADD_WORD_ERROR,
} from './constants';

export function changeWord(word) {
  return {
    type: CHANGE_WORD,
    word,
  };
}

export function addWord(word) {
  return {
    type: ADD_WORD,
    word,
  };
}

export function wordAdded() {
  return {
    type: ADD_WORD_SUCCESS,
  };
}

export function wordLoadingError(error) {
  return {
    type: ADD_WORD_ERROR,
    error,
  };
}
