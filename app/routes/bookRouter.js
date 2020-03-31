const BookController = require("../controllers/bookController");
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = router => {
    router
        .route("/libro")
        .get(BookController.listBook)
        .post(authMiddleware,BookController.createBook);
    router
        .route("/libro/:libroId")
        .get(BookController.findBook)
        .delete(authMiddleware,BookController.removeBook)
        .put(authMiddleware,BookController.changeBook);

};