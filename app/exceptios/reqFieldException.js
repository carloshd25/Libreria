class reqFieldException extends Error {
    constructor (field){
        super (`${field} es requerido`);
        this.status = 404;
    };
};

module.exports = reqFieldException