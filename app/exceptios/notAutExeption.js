class notAuthException extends Error {
    constructor (){
        super ('unauthenticated user');
        this.status = 401;
    };
};

module.exports = notAuthException