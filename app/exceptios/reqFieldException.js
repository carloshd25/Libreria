class reqFieldException extends Error {
    constructor (mesage,status){
        super (mesage);
        this.status = status;
    };
};

module.exports = reqFieldException