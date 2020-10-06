import axios from 'axios';



export const makeRobot = (userData, robotData) => {
    debugger
    return axios.post(`/api/robots/user/${userData.id}`, robotData);
};

export const getRobot = (userData) => {
    
    return axios.get(`/api/robots/user/${userData.id}`);
};