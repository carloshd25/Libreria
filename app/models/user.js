const mongoose=require('mongoose');

let usercheme=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
});

mongoose.model('user',bookScheme);
module.exports=mongoose.model('user');