
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import robot from './robot_reducer';

const RootReducer = combineReducers({
    robot,
    session,
    errors
});

export default RootReducer;