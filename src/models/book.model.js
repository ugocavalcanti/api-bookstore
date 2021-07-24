import Sequelize from "sequelize";
import db from "../repositories/db/db.js";
import Author from "./author.model.js"

const Book = db.define("livros", {
    livroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, { underscored: true });

Book.belongsTo(Author, { foreignKey: "autorId"});

export default Book;