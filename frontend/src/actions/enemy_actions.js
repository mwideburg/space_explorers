import * as APIUtil from '../util/enemy_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_ENEMY = "RECEIVE_CURRENT_ENEMY";
export const SET_ENEMY_HP = "SET_ENEMY_HP";
export const SET_ENEMY_MISSLE = "SET_ENEMY_MISSLE";

export const receiveCurrentEnemy = currentEnemy => ({
    type: RECEIVE_CURRENT_ENEMY,
    currentEnemy
});

export const setEnemyMissle = (missles) => {
  return {
    type: SET_ENEMY_MISSLE,
    missles,
  };
};

export const setEnemyHp = (hp) => {
  return {
    type: SET_ENEMY_HP,
    hp,
  };
};

export const getEnemy = (enemy) => dispatch => {
    return APIUtil.getEnemy(enemy).then((enemy) => {
        if (enemy.data.length === 0){
            return false
        }
        // refactor for loccation?
        let last = enemy.data.length - 1;
        let enemie = enemy.data[last];
        localStorage.setItem('enemy', JSON.stringify(enemie))
        // debugger   
        return dispatch(receiveCurrentEnemy(enemie))
    });
};