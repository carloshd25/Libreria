const jwt = require('jsonwebtoken');
const config = require('../configs/configs');
const authException = require('../exceptios/notAutExeption');
const Exception=require('./pathExceptios');


module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    const Path=(req.route.path);
    const Method=(req.method);

    const exception=  Exception.exceptions(Path,Method);
    const exc=exception.exc;
    

    if (!token && exc==false) {
        console.log("no token");
        throw new authException();
    }

    jwt.verify(token, config.SECRET, (err, decToken) => {
        if (err && exc==false) {
            console.log("error token");
            throw new authException();
        }
        if(!err)
        {req.user = decToken.user;}

        next();
    });
};