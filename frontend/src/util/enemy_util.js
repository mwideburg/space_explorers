import axios from 'axios';


export const makeEnemy = (enemyData) => {
  // debugger
  return axios.post(`/api/enemies/`, enemyData);
};


export const getEnemy = (enemyData) => {

    return axios.get(`/api/enemies/${enemyData.id}`);
};
export const getEnemies = (robot) => {
  // debugger
    return axios.get(`/api/enemies/location/${robot.location}`);
};

