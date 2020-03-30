const jwt = require('jsonwebtoken');
const config = require ('../configs/configs');
const authException = require ('../exceptios/notAutExeption')


module.exports = (req, res, next) => {
    const token = req.headers ['authorization'];

    if (!token) {
        throw new authException();
    }

    jwt.verify(token, config.SECRET, (err, decToken) => {
        if (err ) {
            throw new authException();
        }
        req.user = decToken.user;
        next();
    });
};