import * as APIUtil from '../util/enemy_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_ENEMY = "RECEIVE_CURRENT_ENEMY";
export const RECEIVE_CURRENT_ENEMIES = "RECEIVE_CURRENT_ENEMIES";
export const SET_ENEMY_HP = "SET_ENEMY_HP";
export const SET_ENEMY_MISSLE = "SET_ENEMY_MISSLE";

export const receiveCurrentEnemy = currentEnemy => ({
    type: RECEIVE_CURRENT_ENEMY,
    currentEnemy
});
export const receiveCurrentEnemies = enemies => ({
    type: RECEIVE_CURRENT_ENEMIES,
    enemies
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
    return APIUtil.getEnemy(enemy).then((res) => {
        if (res.data.length === 0){
            return false
        }
        // refactor for loccation?
        let last = res.data.length - 1;
        let enemie = res.data[last];
        localStorage.setItem('enemy', JSON.stringify(enemie))
        // debugger   
        return dispatch(receiveCurrentEnemy(enemie))
    });
};
export const getEnemies = (robot) => dispatch => {
    return APIUtil.getEnemies(robot).then((res) => {
        if (res.data.length === 0){
            return false
        }
        // refactor for loccation?
        
        
        // debugger   
        return dispatch(receiveCurrentEnemies(res.data))
    });
};