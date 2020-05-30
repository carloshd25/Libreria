const UserService=require("../services/userServices");
const reqException = require('../exceptios/reqFieldException');

exports.removeUser = async (req, res) => {
    let idUser =req.params.UserId;
    let deleteUser=await UserService.removeUser(idUser);
    if(!deleteUser){
        throw new reqException('User not found');
        //res.status(401).send("User not found");
    }
    else{
        res.status(200).send(deleteUser);
    }
    
};

exports.changeUser = async (req, res) => {
    let idUser=req.params.UserId;
    let user=req.body;
    let updateUser=await UserService.changeUser(idUser,user)
    if(!updateUser){
        throw new reqException('User not found');
        //res.status(401).send("user not found");
    }
    else{
        res.status(200).send(updateUser);
    }
};

exports.findUser = async (req, res) => {
    let idUser=req.params.UserId;
    let searchUser=await (await UserService.findUser(idUser));
    if(!searchUser){
        throw new reqException('User not found');
        //res.status(401).send("User not found");
    }
    else{
        res.status(200).send(searchUser);
    }
}

exports.listUser = async (req, res) => {
    let username=req.query.username;
    let users =await UserService.listUser(username);
    
    if(!users){
        throw new reqException('User not found');
        //res.status(401).send("user not found");
    }
    else{
        res.status(200).send(users);
    }

};