const userAutController = require("../controllers/userAutController");

module.exports = router => {
    router
        .route("/auth/signup")
        .post(userAutController.singUp);
    router
        .route("/auth/signin")
        .post(userAutController.login);;

};