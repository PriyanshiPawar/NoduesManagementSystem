import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Fee = sequelize.define("Fee", {
    amount: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
    },
});

export default Fee;