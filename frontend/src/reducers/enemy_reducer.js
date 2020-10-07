import {
  RECEIVE_CURRENT_ENEMY,
  SET_ENEMY_HP,
  SET_ENEMY_MISSLE,
  RECEIVE_CURRENT_ENEMIES
} from "../actions/enemy_actions";



const initialState = {
    enemy: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_CURRENT_ENEMY:
        return Object.assign({}, action.currentEnemy);
    case RECEIVE_CURRENT_ENEMIES:
        return Object.assign({}, action.enemies);

    case SET_ENEMY_HP:
        return Object.assign({}, action.hp);
        
    case SET_ENEMY_MISSLE:
        return Object.assign({}, action.missles);

    default:
      return state;
  }
};
