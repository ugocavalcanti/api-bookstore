import Sale from "../models/sale.model.js";
import Book from "../models/book.model.js";
import Client from "../models/client.model.js";

async function insert(sale) {
    return await Sale.create(sale);
}

async function getAll() {
    return await Sale.findAll({
        include: [
            {
                model: Book
            },
            {
                model: Client
            }
        ]
    });
}

async function getByPk(idSale) {
    return await Sale.findByPk(idSale);
}

async function getSalesByClient(idClient) {
    return await Sale.findAll({
        where: {
            clienteId: idClient
        }
    })
}

async function getSalesByBook(idBook) {
    return await Sale.findAll({
        where: {
            livroId: idBook
        }
    })
}

async function getSalesByAuthor(idAuthor) {
    return await Sale.findAll({
        include: [
            {
                model: Book,
                where: {
                    autorId: idAuthor
                }
            }
        ]
    })
}

export default {
    insert,
    getAll,
    getByPk,
    getSalesByClient,
    getSalesByBook,
    getSalesByAuthor
}