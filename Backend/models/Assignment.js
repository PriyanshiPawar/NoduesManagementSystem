import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Assignment = sequelize.define("Assignment", {
    subject: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
    },
});

export default Assignment;