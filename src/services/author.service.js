import authorRepository from "../repositories/author.repository.js";

async function insert(author) {
    return await authorRepository.insert(author);
}

async function getAll() {
    return await authorRepository.getAll();
}

async function getByPk(idAuthor) {
    return await authorRepository.getByPk(idAuthor);
}

async function update(author) {
    return await authorRepository.update(author);
}

async function destroy(idAuthor) {
    await authorRepository.destroy(idAuthor);
}

export default {
    insert,
    getAll,
    getByPk,
    update,
    destroy
}