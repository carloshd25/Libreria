const BookController = require("../controllers/bookController");

module.exports = router => {
    router
        .route("/libro")
        .get(BookController.listBook)
        .post(BookController.createBook);
    router
        .route("/libro/:libroId")
        .get(BookController.findBook)
        .delete(BookController.removeBook)
        .put(BookController.changeBook);

};