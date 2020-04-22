const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('Los datos son incorrectos');
    }
    const user = {
        name: name
    };
    return Promise.resolve(store.addUser(user));
}

function listUsers() {
    return store.listUsers();
}

module.exports = {
    addUser,
    listUsers
}