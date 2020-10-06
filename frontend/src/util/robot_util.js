import axios from 'axios';



export const makeRobot = (userData, robotData) => {
    debugger
    return axios.post(`/api/robots/user/${userData.id}`, robotData);
};

export const getRobot = (userData) => {
    debugger
    return axios.get(`/api/robots/user/${userData.id}`);
};
export const updateRobot = (robot) => {
    debugger
    return axios.patch(`/api/robots/${robot._id}`, robot);
};