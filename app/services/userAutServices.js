const jwt = require("jsonwebtoken");
const config = require("../configs/configs");
const userService = require("./userServices");
const userModel = require("../models/user");


exports.authenticate = async (username, pass) => {
    const user = await userService.listUser(username); 
    if (!user) {
      throw new Error("User not found or does not exist");
    }
  
    const Result = await user.comparePassword(pass);
    console.log(Result);
  
    if (!Result) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ user: user._id }, config.SECRET, {
      expiresIn: 10000
    }); 
  
    return token;
  };