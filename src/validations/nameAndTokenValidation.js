function validateUser(user){
    let token = '';
    let name = '';
    if (user === undefined){
        token = JSON.parse(sessionStorage.getItem("token"));
        if (token === ''){
            return false;
        }
    }
    name = JSON.parse(sessionStorage.getItem("name"));
    const firstName = name.split(' ');
    name = firstName[0];
    return {token, name};
}

export {
    validateUser,
}