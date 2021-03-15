import produce from 'immer';
import { LOAD_DATA_SUCCESS, LOAD_DATA, LOAD_DATA_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        draft.data = false;
        break;

      case LOAD_DATA_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
