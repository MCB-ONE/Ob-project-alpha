import * as actionTypes from '../actions/offersActionTypes';

// Initial offers state
const initialState = {
  data: null,
  /* showSuccessModal: false, */
};

const executeGetDataSuccess = (state, action) => {
  return {
      ...state,
      data: action.data,
  };
};

/**
 * This is a reducer for control the offers state
 * @param {object} offers initial state
 * @param {object} action to dispatch
 * @returns {object} state updated or old state
 */
 const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS:
          return executeGetDataSuccess(state, action);
        default:
          return state;
    }
};

export default offersReducer;
