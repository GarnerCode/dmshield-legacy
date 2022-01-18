import { combineReducers } from 'redux';
import campNameReducer from './campNameReducer';
import campSummReducer from './campSummReducer';
import sessionReducer from './sessionReducer';
import characterReducer from './characterReducer'

const reducers = combineReducers({
    campName: campNameReducer,
    campSumm: campSummReducer,
    sessions: sessionReducer,
    characters: characterReducer
});

export default reducers;