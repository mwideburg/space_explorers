import {
    RECEIVE_CURRENT_ROBOT,
    RECIEVE_USER_ROBOT,
    SET_ROBOT_HP,
    SET_ROBOT_MISSLE,
} from '../actions/robot_actions';



const initialState = {
    robot: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
      case RECEIVE_CURRENT_ROBOT:
          // debugger
          return Object.assign(action.currentRobot)
      case SET_ROBOT_HP:
        return Object.assign({}, action.hp);

      case SET_ROBOT_MISSLE:
        return Object.assign({}, action.missles);
    
      case RECIEVE_USER_ROBOT:
        return Object.assign({}, action.userRobot);

      default:
        return state;
    }
}