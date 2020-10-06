import { 
    SELECT_ENEMY, 
    SET_ENEMY_HP, 
    SET_ROBOT_HP } from '../actions/battle_actions';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ENEMY:
            
        case SET_ENEMY_HP:

        default:
            return state;
    }
}