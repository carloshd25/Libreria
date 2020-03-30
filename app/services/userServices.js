const User = require("../models/user");

exports.createUser = async (user) => {
    let addUser = await User.create(user);
    return addUser;
};

exports.removeUser = async (idUser) => {
    let deleteUser = await User.findByIdAndDelete(idUser);
    return deleteUser;
};

exports.changeUser = async (idUser, user) => {
    let updateUser = await User.findByIdAndUpdate(idUser, user, { new: true });
    return updateUser;
};

exports.findUser = async (idUser) => {
    let searchUser = await User.findById(idUser);
    return searchUser;
}

exports.listUser = async (username) => {
    let users;
    if (username) {
        users = await User.findOne({
            username:username
        });
    }
    else {
        users = await User.find();
    }
    return users;
};