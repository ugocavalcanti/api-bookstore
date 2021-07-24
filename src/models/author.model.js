import Sequelize from "sequelize";
import db from "../repositories/db/db.js";

const Author = db.define("autores", {
    autorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { underscored: true });

export default Author;