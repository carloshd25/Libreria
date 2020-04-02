const BookService = require("../services/bookServices");


exports.createBook = async (req, res) => {
    let book = req.body;
    let addBook = await BookService.createBook(book);
    res.status(200).send(addBook);
};

exports.removeBook = async (req, res) => {
    let idBook = req.params.libroId;
    let deleteBook = await BookService.removeBook(idBook);
    if (!deleteBook) {
        res.status(401).send("book not found");
    }
    else {
        res.status(200).send(deleteBook);
    }

};

exports.changeBook = async (req, res) => {
    let idBook = req.params.libroId;
    let book = req.body;
    let updateBook = await BookService.changeBook(idBook, book)
    if (!updateBook) {
        res.status(401).send("book not found");
    }
    else {
        res.status(200).send(updateBook);
    }
};

exports.findBook = async (req, res) => {
    let idBook = req.params.libroId;
    let searchBook = await BookService.findBook(idBook);
    if (!searchBook) {
        res.status(401).send("book not found");
    }
    else {
        res.status(200).send(searchBook);
    }
}

exports.listBook = async (req, res) => {
    let search = req.query.search || '';
    let books = await BookService.listBook(search);

    if (!books) {
        res.status(401).send("book not found");
    }
    else {
        res.status(200).send(books);
    }

};

exports.addFavorite = async (req, res) => {
    idUser = req.user;
    idBook = req.params.libroId;

    let Book = await BookService.findBook(idBook);
    if (!Book) {
        res.status(401).send("book not found");
    }
    else {

        let validate = await BookService.validateFavorite(idUser, idBook);
        if (validate.validacion == true) {
            res.status(401).send("the book is already a favorite");
        } else {
            let users = await BookService.addFavorite(idUser, Book);
            res.status(200).send(users);
        }

        
    }

};

exports.removeFavorite = async (req, res) => {
    idUser = req.user;
    idBook = req.params.libroId;

    let Book = await BookService.findBook(idBook);
    if (!Book) {
        res.status(401).send("book not found");
    }
    else {
        let validate = await BookService.validateFavorite(idUser, idBook);
        if (validate.validacion == false) {
            res.status(401).send("book not favorite");
        } else {
            let users = await BookService.removeFavorite(idUser, Book);
            res.status(200).send(users);
        }
    }

};