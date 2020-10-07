import {
  RECEIVE_CURRENT_ENEMY,
  SET_ENEMY_HP,
  SET_ENEMY_MISSLE
} from "../actions/enemy_actions";



const initialState = {
    enemy: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_CURRENT_ENEMY:
        return Object.assign(state, action.currentEnemy);

    case SET_ENEMY_HP:
        return Object.assign(enemy.hp, action.hp);
        
    case SET_ENEMY_MISSLE:
        return Object.assign(enemy.missles, action.missles);

    default:
      return state;
  }
};
