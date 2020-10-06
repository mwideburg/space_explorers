// export const SELECT_ROBOT = "SELECT_ROBOT";
export const SELECT_ENEMY = "SELECT_ENEMY";
// export const SET_ENEMY = "SET_ENEMY";
export const SET_ENEMY_HP = "SET_ENEMY_HP";
export const SET_ROBOT_HP = "SET_ROBOT_HP";

export const selectEnemy = (id) => {
    return {
        type: SELECT_ENEMY,
        id,
    }
},

export const setEnemyHp = (id) => {
    return {
        type: SET_ENEMY_HP,
        id,
    }
},

export const setRobotHp = (id) => {
        return {
            type: SET_ROBOT_HP,
            id,
        }
},