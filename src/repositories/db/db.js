import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://ragtxbuh:ku7JBaU2J-r4wGhue_Yc4he-uyzyLRHx@batyr.db.elephantsql.com/ragtxbuh",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;