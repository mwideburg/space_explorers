import * as APIUtil from '../util/robot_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_ROBOT = "RECEIVE_CURRENT_ROBOT";
export const RECIEVE_USER_ROBOT = "RECIEVE_USER_ROBOT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_CURRENT_ROBOT";
export const SET_ROBOT_HP = "SET_ROBOT_HP";
export const SET_ROBOT_MISSLE = "SET_ROBOT_MISSLE";


// We'll dispatch this when our user signs in
export const receiveCurrentRobot = currentRobot => ({
    type: RECEIVE_CURRENT_ROBOT,
    currentRobot
});
export const receiveUserRobot = userRobot => {
    
    return {type: RECEIVE_CURRENT_ROBOT,
    userRobot
}};

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const setRobotHp = (hp) => {
  return {
    type: SET_ROBOT_HP,
    hp,
  };
};

export const setRobotMissle = (missles) => {
  return {
    type: SET_ROBOT_MISSLE,
    missles,
  };
};



export const makeRobot = (user, robot) => dispatch => {
    
    return APIUtil.makeRobot(user, robot).then(robot => {
        
        const data = robot.data
        
        localStorage.setItem('robot', JSON.stringify(data));
        
        return dispatch(receiveCurrentRobot(robot.data))
    }, err => {
        debugger
        return dispatch(receiveErrors(err.response.data))
    }
)}
export const getRobot = (user) => dispatch => {
    
    return APIUtil.getRobot(user).then((robot) => {
        // debugger
        if(robot.data.length === 0){
            return false
        }
        let last = robot.data.length -1;
        let robo = robot.data[last];
        localStorage.setItem('robot', JSON.stringify(robo));
        debugger
        return dispatch(receiveCurrentRobot(robo))
    }, err => {
        debugger
        return dispatch(receiveErrors(err.response.data))
    }
)}
export const updateRobot = (robot) => dispatch => {
    // debugger
    return APIUtil.updateRobot(robot).then((robot) => {
        // debugger
        
        const robo = JSON.parse(robot.config.data)
        localStorage.setItem('robot', JSON.stringify(robo));
        return dispatch(receiveCurrentRobot(robo))
    }, err => {
        // debugger
        return dispatch(receiveErrors(err.response.data))
    }
)}
