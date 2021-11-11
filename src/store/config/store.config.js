import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import { watcherGetAllOffers } from '../sagas/sagas';

/**
 * Function to create global app state
 * @returns {object} global app state
 */
const createAppAsyncStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    // eslint-disable-next-line prefer-const
    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools(),
        ),
    );
    // We init the Watcher Saga
    sagaMiddleware.run(watcherGetAllOffers);
    return store;
};
export default createAppAsyncStore;
