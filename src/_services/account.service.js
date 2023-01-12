// import des modules nécessaires
import Axios from './caller.service.js';

// requête de connexion
let login = (credentials) => {
    return Axios.post('/login', credentials);
};

// requête de déconnexion
let logout = (email) => {
    return Axios.post('/logout', {email: email});
};

let saveUser = (token, email) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
};

let unSave = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}

let getToken = () => {
    return localStorage.getItem('token');
};

let isLogged = () => {
    let token = localStorage.getItem('token');
    return !! token;
};

export const accountService = {
    login,
    logout,
    saveUser,
    isLogged,
    getToken,
    unSave,
};