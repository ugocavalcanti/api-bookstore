import Client from "../models/client.model.js";

async function insert(client) {
    return await Client.create(client);
}

async function getAll() {
    return await Client.findAll();
}

async function getByPk(idClient) {
    return await Client.findByPk(idClient);
}

async function update(client) {
    await Client.update(client, {
        where: {
            clienteId: client.clienteId
        }
    });
    return await getByPk(client.clienteId)
}

async function destroy(idClient) {
    await Client.destroy({
        where: {
            clienteId: idClient
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