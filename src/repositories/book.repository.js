import Book from "../models/book.model.js";
import Author from "../models/author.model.js";
import { connect } from "../repositories/db/db.mongo.js";
import BookInfoSchema from "../schemas/bookinfo.schema.js";

async function insert(book) {
    return await Book.create(book);
}

async function getAll() {
    return await Book.findAll({
        include: [
            {
                model: Author
            }
        ]
    });
}

async function getByPk(idBook) {
    return await Book.findByPk(idBook);
}

async function getBooksByAuthor(idAuthor) {
    return await Book.findAll({
        where: {
            autorId: idAuthor
        }
    })
}

async function update(book) {
    await Book.update(book, {
        where: {
            livroId: book.livroId
        }
    });
    return await getByPk(book.livroId)
}

async function destroy(idBook) {
    await Book.destroy({
        where: {
            livroId: idBook
        }
    })
}

async function insertBookInfo(bookInfo){

    const mongoose = await connect();
    const BookInfo = mongoose.model("livrosinfo", BookInfoSchema);

    BookInfo.create(bookInfo);
}

async function getBookInfo(idBook){

    const mongoose = await connect();
    const BookInfo = mongoose.model("livrosinfo", BookInfoSchema);

    return BookInfo.findOne({ bookId : idBook });
}  

async function updateBookInfo(bookInfo){

    const mongoose = await connect();
    const BookInfo = mongoose.model("livrosinfo", BookInfoSchema);

    await BookInfo.findOneAndUpdate({  bookId: bookInfo.bookId }, bookInfo);
}

async function deleteBookInfo(idBook){

    const mongoose = await connect();
    const BookInfo = mongoose.model("livrosinfo", BookInfoSchema);

    await BookInfo.deleteOne({  bookId: idBook });
}

async function insertReview(idBook, review){

    const bookInfo = await getBookInfo(idBook);
    bookInfo.reviews.push(review);
    await updateBookInfo(bookInfo);
}

async function deleteReview(idBook, index){

    const bookInfo = await getBookInfo(idBook);
    bookInfo.reviews.splice(index, 1);
    await updateBookInfo(bookInfo);
}

export default {
    insert,
    getAll,
    getByPk,
    update,
    destroy,
    getBooksByAuthor,
    insertBookInfo,
    updateBookInfo,
    deleteBookInfo,
    insertReview,
    deleteReview
}