// Import axios config
import axiosConfig from '../../utils/config/axios.config';
// Import Offers Action Types
import * as actionTypes from './offersActionTypes';

/**
 * Specific Get Http Request Action dispatcher
 * @returns action GET_DATA_SUCCESS
 */
 const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data,
    };
};

const getData = () => {
    return (dispatch) => {
        axiosConfig.get('/offers')
        .then((response) => {
            dispatch(getDataSuccess(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };
};

/**
 * Change visivility filter action dispatcher
 * @param {string} filter
 * @returns action SET_VISIBILITY_FILTER

const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter,
        },
    };
}; */

export default getData;
