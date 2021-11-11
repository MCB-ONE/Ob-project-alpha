// Async action types
export const API_CALL_REQUEST = 'API_CALL_REQUEST';// Watcher Saga listen
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';// Dispatched by worker sagas
export const API_CALL_FAILURE = 'API_CALL_FAILURE';// Dispatched by worker sagas

/**
 * This is a generic action to make an http request
 * @type {function}
 * @param {string} method
 * @param {string} url
 * @param {object} data
 * @returns {object} action type and action payload
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method,
            url,
            data,
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE,
        },
    };
};
