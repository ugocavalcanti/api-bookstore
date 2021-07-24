import bookService from "../services/book.service.js";

async function insertBook(req, res){
    try {
        const book = req.body;
        const newBook = await bookService.insert(book);
        res.send(newBook)
    }catch (error) {
        res.status(400)
        res.send("Error to insert book - POST - " + error)
    }
}

async function getBooks(req, res){
    try {
        const authorId = req.query.authorid;
        const books = await bookService.getAll(authorId);
        res.send(books)
    }catch (error) {
        res.status(400)
        res.send("Error to get books - GET - " + error)
    }
}

async function getBook(req, res){
    try {
        const idBook = req.params.id
        const book = await bookService.getByPk(idBook);
        res.send(book)
    }catch (error) {
        res.status(400)
        res.send("Error to get book - GET - " + error)
    }
}

async function updateBook(req, res){
    try {
        const book = req.body;
        const updatedBook = await bookService.update(book);
        res.send(updatedBook);
    }catch (error) {
        res.status(400)
        res.send("Error to update book - PUT - " + error)
    }
}

async function deleteBook(req, res){
    try {
        const idBook = req.params.id
        await bookService.destroy(idBook);
        res.send({message: "Book deleted."})
    }catch (error) {
        res.status(400)
        res.send("Error to delete book - DELETE - " + error)
    }
}

async function insertBookInfo(req, res){
    try {
        const bookInfo = req.body;
        const newBookInfo = await bookService.insertBookInfo(bookInfo);
        res.send(newBookInfo)
    }catch (error) {
        res.status(400)
        res.send("Error to insert book info - POST - " + error)
    }
}

async function updateBookInfo(req, res){
    try {
        const bookInfo = req.body;
        await bookService.updateBookInfo(bookInfo);
        res.send({message: "Book Info updated."})
    }catch (error) {
        res.status(400)
        res.send("Error to update book info - PUT - " + error)
    }
}

async function deleteBookInfo(req, res){
    try {
        const bookId = req.params.bookid;
        await bookService.deleteBookInfo(bookId);
        res.send({message: "Book Info deleted."})
    }catch (error) {
        res.status(400)
        res.send("Error to delete book info - DELETE - " + error)
    }
}

async function insertReview(req, res){
    try {
        const review = req.body;
        const idBook = req.params.bookid;
        const newReview = await bookService.insertReview(idBook, review);
        res.send(newReview)
    }catch (error) {
        res.status(400)
        res.send("Error to insert review - POST - " + error)
    }
}

async function deleteReview(req, res){
    try {
        const { bookid, index } = req.params;
        await bookService.deleteReview(bookid, index);
        res.send({message: "Review deleted."})
    }catch (error) {
        res.status(400)
        res.send("Error to delete review - DELETE - " + error)
    }
}

export default {
    insertBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    insertBookInfo,
    updateBookInfo,
    deleteBookInfo,
    insertReview,
    deleteReview
}