const Book = require("../models/book");

exports.createBook = async (book) => {
    let addBook = await Book.create(book);
    return addBook;
};

exports.removeBook = async (idBook) => {
    let deleteBook = await Book.findByIdAndDelete(idBook);
    return deleteBook;
};

exports.changeBook = async (idBook, book) => {
    let updateBook = await Book.findByIdAndUpdate(idBook, book, { new: true });
    return updateBook;
};

exports.findBook = async (idBook) => {
    let searchBook = await Book.findById(idBook);
    return searchBook;
}

exports.listBook = async (search) => {
    let books;
    if (search) {
        books = await Book.findOne({
            nombre: search
        });
    }
    else {
        books = await Book.find();
    }
    return books;
};