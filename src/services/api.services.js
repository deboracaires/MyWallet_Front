import axios from 'axios';

const URL = 'https://mywallet-deboracaires.herokuapp.com';

function postSignUp(body) {
    return axios.post(`${URL}/sign-up`, body);
}

function postSignIn(body) {
    return axios.post(`${URL}/sign-in`, body);
}
function getFinancialEvents(config) {
    return axios.get(`${URL}/financial-events`, config);
}

function getSum(config) {
    return axios.get(`${URL}/financial-events/sum`, config);
}

function postFinancial(body, config) {
    return axios.post(`${URL}/financial-events`, body, config);
}

export {
    postSignUp,
    postSignIn,
    getFinancialEvents,
    getSum,
    postFinancial,
};
