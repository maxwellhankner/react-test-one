import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddPage = state => state.addPage || initialState;

const makeSelectWord = () =>
  createSelector(
    selectAddPage,
    substate => substate.word,
  );

const makeSelectAddingWord = () =>
  createSelector(
    selectAddPage,
    globalState => globalState.addingWord,
  );

export { makeSelectWord, selectAddPage, makeSelectAddingWord };
