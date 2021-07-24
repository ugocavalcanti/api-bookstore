import Author from "../models/author.model.js";

async function insert(author) {
    return await Author.create(author);
}

async function getAll() {
    return await Author.findAll();
}

async function getByPk(idAuthor) {
    return await Author.findByPk(idAuthor);
}

async function update(author) {
    await Author.update(author, {
        where: {
            autorId: author.autorId
        }
    });
    return await getByPk(author.autorId)
}

async function destroy(idAuthor) {
    await Author.destroy({
        where: {
            autorId: idAuthor
        }
    })
}

export default {
    insert,
    getAll,
    getByPk,
    update,
    destroy
}