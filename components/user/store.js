const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    myUser.save();
}

function listUsers() {
    return Model.find();
}

module.exports = {
    addUser,
    listUsers
}