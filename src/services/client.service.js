import clientRepository from "../repositories/client.repository.js";

async function insert(client) {
    return await clientRepository.insert(client);
}

async function getAll() {
    return await clientRepository.getAll();
}

async function getByPk(idClient) {
    return await clientRepository.getByPk(idClient);
}

async function update(client) {
    return await clientRepository.update(client);
}

async function destroy(client) {
    await clientRepository.destroy(client);
}

export default {
    insert,
    getAll,
    getByPk,
    update,
    destroy
}