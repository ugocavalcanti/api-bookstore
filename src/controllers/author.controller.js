import authorService from "../services/author.service.js";

async function insertAuthor(req, res){
    try {
        const author = req.body;
        const newAuthor = await authorService.insert(author);
        res.send(newAuthor)
    }catch (error) {
        res.status(400)
        res.send("Error to insert author - POST - " + error)
    }
}

async function getAuthors(req, res){
    try {
        const authors = await authorService.getAll();
        res.send(authors)
    }catch (error) {
        res.status(400)
        res.send("Error to get authors - GET - " + error)
    }
}

async function getAuthor(req, res){
    try {
        const idAuthor = req.params.id
        const author = await authorService.getByPk(idAuthor);
        res.send(author)
    }catch (error) {
        res.status(400)
        res.send("Error to get author - GET - " + error)
    }
}

async function updateAuthor(req, res){
    try {
        const author = req.body;
        const updatedAuthor = await authorService.update(author);
        res.send(updatedAuthor);
    }catch (error) {
        res.status(400)
        res.send("Error to update author - PUT - " + error)
    }
}

async function deleteAuthor(req, res){
    try {
        const idAuthor = req.params.id
        await authorService.destroy(idAuthor);
        res.send({message: "Author deleted."})
    }catch (error) {
        res.status(400)
        res.send("Error to delete author - DELETE - " + error)
    }
}

export default {
    insertAuthor,
    getAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor
}