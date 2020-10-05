import * as APIUtil from '../util/robot_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_ROBOT = "RECEIVE_CURRENT_ROBOT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_CURRENT_ROBOT";


// We'll dispatch this when our user signs in
export const receiveCurrentRobot = currentRobot => ({
    type: RECEIVE_CURRENT_ROBOT,
    currentRobot
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const makeRobot = (user, robot) => dispatch => {
    debugger
    return APIUtil.makeRobot(user, robot).then((robot) => {
        debugger
        return dispatch(receiveCurrentRobot(robot))
    }, err => {
        debugger
        return dispatch(receiveErrors(err.response.data))
    }
)}
