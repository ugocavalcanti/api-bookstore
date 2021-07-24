import saleRepository from "../repositories/sale.repository.js";

async function insert(sale) {
    return await saleRepository.insert(sale);
}

async function getAll(clientId, bookId, authorId) {
    if (clientId) return await saleRepository.getSalesByClient(clientId);
    if (bookId) return await saleRepository.getSalesByBook(bookId);
    if (authorId) return await saleRepository.getSalesByAuthor(authorId);
    
    return await saleRepository.getAll();
}

async function getByPk(idSale) {
    return await saleRepository.getByPk(idSale);
}

export default {
    insert,
    getAll,
    getByPk
}