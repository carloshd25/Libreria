const BookController = require("../controllers/bookController");
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = router => {
    router
        .route("/libro")
        .get(BookController.listBook)
        .post(authMiddleware,BookController.createBook);
    router
        .route("/libro/:libroId")
        .get(authMiddleware,BookController.findBook)
        .delete(authMiddleware,BookController.removeBook)
        .put(authMiddleware,BookController.changeBook);
    router
        .route("/libro/addfavorite/:libroId")
        .post(authMiddleware,BookController.addFavorite);
    router
        .route("/libro/rmfavorite/:libroId")
        .post(authMiddleware,BookController.removeFavorite);        

};