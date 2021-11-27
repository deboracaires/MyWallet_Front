import axios from 'axios';

const URL = 'https://mywallet-deboracaires.herokuapp.com';

function postSignUp(body) {
    return axios.post(`${URL}/sign-up`, body);
}

function postSignIn(body) {
    return axios.post(`${URL}/sign-in`, body);
}

export {
    postSignUp,
    postSignIn,
}