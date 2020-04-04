const User = require("../models/user");
const Book = require("../models/book");
const reqException = require('../exceptios/reqFieldException');
const  bcrypt = require('bcryptjs');

exports.createUser = async (user) => {
    
    if(!user.username){throw new reqException('username field required',402);}
    if(!user.password){throw new reqException('password field required',402);}

    let addUser = await User.create(user);
    return addUser;
};

exports.removeUser = async (idUser) => {
    let deleteUser = await User.findByIdAndDelete(idUser);
    return deleteUser;
};

exports.changeUser = async (idUser, user) => {

    if(!user.username){throw new reqException('username field required',402);}
    if(!user.password){throw new reqException('password field required',402);}

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt); 
    user.password = hashedPassword;

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
        users = await User.find().populate({ path: "favoritos",model:Book, select: "nombre descripcion autor imagen categorias" });;
    }
    return users;
};