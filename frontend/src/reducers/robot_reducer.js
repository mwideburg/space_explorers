import {
    RECEIVE_CURRENT_ROBOT
} from '../actions/robot_actions';

const initialState = {
    robot: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case RECEIVE_CURRENT_ROBOT:
            debugger
            return Object.assign({}, action.currentRobot)
        default:
            return state;
    }
}