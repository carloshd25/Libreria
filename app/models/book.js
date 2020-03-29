const mongoose=require('mongoose');

let bookScheme=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    descripcion:{
        type:String
    },
    autor:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    },
    categorias:[
        {
            type:String
        }
    ]
});

mongoose.model('book',bookScheme);
module.exports=mongoose.model('book');
