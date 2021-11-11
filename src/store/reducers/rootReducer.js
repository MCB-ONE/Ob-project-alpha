import { combineReducers } from 'redux';
import offersReducer from './offersReducer';

const rootReducer = combineReducers(
    {
        // state name: reducer that will control it
        offersState: offersReducer,
    },
);

export default rootReducer;
