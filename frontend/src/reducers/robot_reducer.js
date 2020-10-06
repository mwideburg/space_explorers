import {
    RECEIVE_CURRENT_ROBOT,
    RECIEVE_USER_ROBOT
} from '../actions/robot_actions';

const initialState = {
    robot: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case RECEIVE_CURRENT_ROBOT:
            
            return Object.assign(action.currentRobot)
        case RECIEVE_USER_ROBOT:
            
            return Object.assign(action.userRobot)
        default:
            return state;
    }
}