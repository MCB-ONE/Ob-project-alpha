import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/offersActions';

/**
 * Simple async function to do a http request
 * @param {object} especific http request
 * @returns {promise} promise from axios request
 */
function fetchHttp(request) {
    // eslint-disable-next-line func-names
    return function () {
        return (axios(request));
    };
}

/**
 * Worker SAGA is called from watcher Saga, does a specific async http request and dispatches an action
 * @param {object} action
 */
export function* workerGetAllOffers(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request));
        // We obtain the offers list from response
        const offersList = response.data;
        // dispatch an action to be managed by the reducer
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                offersList,
            },
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction, // API_CALL_FAILURE
            payload: {
                error,
            },
        });
    }
}

/**
 * Watcher saga listen to the API_CALL_REQUEST action to dispatch and fork a worker on every action
 */
export function* watcherGetAllOffers() {
    // Listens the action and start a worker Saga
    yield takeLatest(API_CALL_REQUEST, workerGetAllOffers);
}
