import bookRepository from "../repositories/book.repository.js";

async function insert(book) {
    return await bookRepository.insert(book);
}

async function getAll(authorId) {
    if (authorId) return await bookRepository.getBooksByAuthor(authorId);

    return await bookRepository.getAll();
}

async function getByPk(idBook) {
    return await bookRepository.getByPk(idBook);
}

async function update(book) {
    return await bookRepository.update(book);
}

async function destroy(idBook) {
    await bookRepository.destroy(idBook);
}

async function insertBookInfo(bookInfo) {
    await bookRepository.insertBookInfo(bookInfo);
}

async function updateBookInfo(bookInfo) {
    await bookRepository.updateBookInfo(bookInfo);
}

async function deleteBookInfo(bookInfo) {
    await bookRepository.deleteBookInfo(bookInfo);
}

async function insertReview(idBook, review) {
    await bookRepository.insertReview(idBook, review);
}

async function deleteReview(bookId, index) {
    await bookRepository.deleteReview(bookId, index);
}

export default {
    insert,
    getAll,
    getByPk,
    update,
    destroy,
    insertBookInfo,
    updateBookInfo,
    deleteBookInfo,
    insertReview,
    deleteReview
}