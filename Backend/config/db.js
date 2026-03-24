import { Sequelize } from "sequelize";

const sequelize = new Sequelize("minorDb", "root", "NewPassword123", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;