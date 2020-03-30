const mongoose=require('mongoose');
const  bcrypt = require('bcryptjs');

let userScheme=new mongoose.Schema({
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

userScheme.methods.toJSON = function () {//trae los objetos de mongoose y los convierte a .json
    let user = this.toObject();
        delete user.password;
        return user;
};

//función para comparar el password que toma y el encriptado
userScheme.methods.comparePassword = async function(password){
    let result = await bcrypt.compare(password, this.password);
    return result;
};

//dispara un trigger antes de guardar 
userScheme.pre('save', async function(next){
    const user = this;
    if (!user.isModified('password')) {
        return next(); 
    } 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt); //Cifrar el password
    user.password = hashedPassword;
    return next();

});

mongoose.model('user',userScheme);
module.exports=mongoose.model('user');