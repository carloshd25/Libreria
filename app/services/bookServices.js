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
    /*let books;
    if (search) {
       books = await Book.find(
           { $or:[
           {"nombre":new RegExp(search,'si')},
           {"autor":new RegExp(search,'si')},
           {"categorias":new RegExp(search,'si')}
        ]
        }
           );
    }
    else {
        books = await Book.find();
    }
    */
    let books = await Book.find(
        {
            $or: [
                { "nombre": new RegExp(search, 'si') },
                { "autor": new RegExp(search, 'si') },
                { "categorias": new RegExp(search, 'si') }
            ]
        }
    );
    return books;
};