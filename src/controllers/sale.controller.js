import saleService from "../services/sale.service.js";

async function insertSale(req, res){
    try {
        const sale = req.body;
        const newSale = await saleService.insert(sale);
        res.send(newSale)
    }catch (error) {
        res.status(400)
        res.send("Error to insert sale - POST - " + error)
    }
}

async function getSales(req, res){
    try {
        const clientId = req.query.clientid;
        const bookId = req.query.bookid;
        const authorId = req.query.authorid;
        const sales = await saleService.getAll(clientId, bookId, authorId);
        res.send(sales)
    }catch (error) {
        res.status(400)
        res.send("Error to get sales - GET - " + error)
    }
}

async function getSale(req, res){
    try {
        const idSale = req.params.id
        const sale = await saleService.getByPk(idSale);
        res.send(sale)
    }catch (error) {
        res.status(400)
        res.send("Error to get sale - GET - " + error)
    }
}

export default {
    insertSale,
    getSales,
    getSale
}