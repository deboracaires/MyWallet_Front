function validateUser(user){
    let token = '';
    let name = '';
    if (user === undefined){
        token = JSON.parse(sessionStorage.getItem("token"));
        name = JSON.parse(sessionStorage.getItem("name"));
        if (token === ''){
            return false;
        }
    }
    return {token, name};
}

export {
    validateUser,
}