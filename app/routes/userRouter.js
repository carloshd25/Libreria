const UserController = require("../controllers/userController");

module.exports = router => {
    router
        .route("/user")
        .get(UserController.listUser)
    router
        .route("/user/:UserId")
        .get(UserController.findUser)
        .delete(UserController.removeUser)
        .put(UserController.changeUser);

};