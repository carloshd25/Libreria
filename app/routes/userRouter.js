const UserController = require("../controllers/userController");
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = router => {
    router
        .route("/user")
        .get(authMiddleware,UserController.listUser)
    router
        .route("/user/:UserId")
        .get(authMiddleware,UserController.findUser)
        .delete(authMiddleware,UserController.removeUser)
        .put(authMiddleware,UserController.changeUser);

};