import clientService from "../services/client.service.js";

async function insertClient(req, res){
    try {
        const client = req.body;
        const newClient = await clientService.insert(client);
        res.send(newClient)
    }catch (error) {
        res.status(400)
        res.send("Error to insert client - POST - " + error)
    }
}

async function getClients(req, res){
    try {
        const clients = await clientService.getAll();
        res.send(clients)
    }catch (error) {
        res.status(400)
        res.send("Error to get clients - GET - " + error)
    }
}

async function getClient(req, res){
    try {
        const idClient = req.params.id
        const client = await clientService.getByPk(idClient);
        res.send(client)
    }catch (error) {
        res.status(400)
        res.send("Error to get client - GET - " + error)
    }
}

async function updateClient(req, res){
    try {
        const client = req.body;
        const updatedClient = await clientService.update(client);
        res.send(updatedClient);
    }catch (error) {
        res.status(400)
        res.send("Error to update clients - PUT - " + error)
    }
}

async function deleteClient(req, res){
    try {
        const idClient = req.params.id
        await clientService.destroy(idClient);
        res.send({message: "Client deleted."})
    }catch (error) {
        res.status(400)
        res.send("Error to delete client - DELETE - " + error)
    }
}

export default {
    insertClient,
    getClient,
    getClients,
    updateClient,
    deleteClient
}