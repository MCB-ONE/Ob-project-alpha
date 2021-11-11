import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from '../actions/offersActions';

// Initial state for offers state
const initialState = {
    // To check if the request is being made
    fetching: false,
    offerList: [],
    error: null,
};
/**
 * This is a reducer for control the offers state
 * @param {object} offers initial state
 * @param {object} action to dispatch
 * @returns {object} state updated or old state
 */
 const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                offerList: null,
                error: null,
            };

        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                offerList: action.payload.offerList,
                error: null,
            };

        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                offerList: null,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default offersReducer;
