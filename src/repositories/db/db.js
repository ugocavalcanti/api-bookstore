import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://<user>:<password>@batyr.db.elephantsql.com/<database>",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;
