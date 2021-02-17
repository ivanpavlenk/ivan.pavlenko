import {PENDING_FILE, LOADING_FILE} from '../actions/gistFiles';

let initialsState = {
  isLoading: false,
  gistFiles: [],
  isDisabledBtn: false,
};

export const gistFiles = (state = initialsState, action) => {
  switch (action.type) {
    case PENDING_FILE: {
      return {...state, isLoading: true};
    }
    case LOADING_FILE: {
      return {
        ...state,
        isLoading: false,
        gistFiles: [...state.gistFiles, ...action.payload],
        isDisabledBtn: true,
      };
    }
    default:
      return state;
  }
};
