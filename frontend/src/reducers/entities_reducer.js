import { combineReducers } from 'redux';

import robot from './robot_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
    robot
});