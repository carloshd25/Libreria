module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    
    return res.status(status).send({
        status: status,
        error: err.message || 'Se ha presentado un error en la aplicación'
    })
};