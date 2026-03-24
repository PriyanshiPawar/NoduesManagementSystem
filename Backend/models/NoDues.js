import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const NoDues = sequelize.define("NoDues", {
    overallStatus: {
        type: DataTypes.STRING,
        defaultValue: "pending",
    },
});

export default NoDues;