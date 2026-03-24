import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Approval = sequelize.define("Approval", {
    department: {
        type: DataTypes.ENUM("teacher", "account", "hod", "exam"),
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
    },
});

export default Approval;