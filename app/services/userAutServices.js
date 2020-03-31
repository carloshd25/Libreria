const jwt = require("jsonwebtoken");
const config = require("../configs/configs");
const userService = require("./userServices");
const userModel = require("../models/user");


exports.authenticate = async (username, password) => {
    const user = await userService.listUser(username); 
    if (!user) {
      throw new Error("User not found or does not exist");
    }
  
    const Result = await user.comparePassword(password);
    //console.log(Result);
  
    if (!Result) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ user: user._id }, config.SECRET, {
      expiresIn: 10000
    }); 
  
    return token;
  };


  exports.validateToken = token => {
    const decodedToken = jwt.verify(token, config.SECRET);
    return decodedToken;
  };

  exports.signUp = async user => {
    const username = user.username;
    const userExist = await userService.listUser(username);
  
    if (userExist) {
      throw new Error("User already exists");
    }
    return await userService.createUser(user);
  };

