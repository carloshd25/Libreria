const Book = require("../models/book");
const User = require("../models/user");
const reqException = require('../exceptios/reqFieldException');

exports.createBook = async (book) => {

    if(!book.nombre){throw new reqException('nombre field required',402);}
    if(!book.autor){throw new reqException('autor field required',402);}
    if(!book.imagen){throw new reqException('imagen field required',402);}

    let addBook = await Book.create(book);
    return addBook;
};

exports.removeBook = async (idBook) => {
    let deleteBook = await Book.findByIdAndDelete(idBook);
    return deleteBook;
};

exports.changeBook = async (idBook, book) => {

    if(!book.nombre){throw new reqException('nombre field required',402);}
    if(!book.autor){throw new reqException('autor field required',402);}
    if(!book.imagen){throw new reqException('imagen field required',402);}

    let updateBook = await Book.findByIdAndUpdate(idBook, book, { new: true });
    return updateBook;
};

exports.findBook = async (idBook) => {
    let searchBook = await Book.findById(idBook);
    return searchBook;
}

exports.listBook = async (search) => {
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

exports.addFavorite = async (idUser, book) => {
    let users = await User.findById(idUser).populate({
        path: "favoritos",
        model: Book,
        select: "nombre descripcion autor imagen categorias"
    });
    users.favoritos.push(book);
    users.save();

    return users;
};

exports.validateFavorite = async (idUser, idBook) => {
    let users = await User.findById(idUser).findOne({ "favoritos": idBook });

    if (!users) {
        return { validacion: false };
    }
    else {
        return { validacion: true };
    }

};

exports.removeFavorite = async (idUser, book) => {
    let users = await User.findById(idUser).populate({
        path: "favoritos",
        model: Book,
        select: "nombre descripcion autor imagen categorias"
    });

    users.favoritos.pull(book);
    users.save();

    return users;
};