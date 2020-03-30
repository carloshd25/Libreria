const UserService=require("../services/userServices");

exports.removeUser = async (req, res) => {
    let idUser =req.params.UserId;
    let deleteUser=await UserService.removeUser(idUser);
    if(!deleteUser){
        res.status(401).send("User not found");
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
        res.status(401).send("user not found");
    }
    else{
        res.status(200).send(updateUser);
    }
};

exports.findUser = async (req, res) => {
    let idUser=req.params.UserId;
    let searchUser=await UserService.findBook(idUser);
    if(!searchUser){
        res.status(401).send("User not found");
    }
    else{
        res.status(200).send(searchUser);
    }
}

exports.listUser = async (req, res) => {
    let username=req.query.username;
    let users =await UserService.listUser(username);
    
    if(!users){
        res.status(401).send("user not found");
    }
    else{
        res.status(200).send(books);
    }

};