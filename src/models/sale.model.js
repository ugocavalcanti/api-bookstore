import Sequelize from "sequelize";
import db from "../repositories/db/db.js";
import Client from "./client.model.js";
import Book from "./book.model.js";

const Sale = db.define("vendas", {
    vendaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

Sale.belongsTo(Book, { foreignKey: "livroId" });
Sale.belongsTo(Client, { foreignKey: "clienteId" })

export default Sale;