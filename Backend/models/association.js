import User from "./User.js";
import NoDues from "./NoDues.js";
import Approval from "./Approval.js";
import Assignment from "./Assignment.js";
import Fee from "./Fee.js";

User.hasMany(NoDues, { foreignKey: "studentId" });
NoDues.belongsTo(User, { foreignKey: "studentId" });

NoDues.hasMany(Approval, { foreignKey: "noDuesId" });
Approval.belongsTo(NoDues, { foreignKey: "noDuesId" });


User.hasMany(Approval, { foreignKey: "approvedBy" });
Approval.belongsTo(User, { foreignKey: "approvedBy" });

User.hasMany(Assignment, { foreignKey: "studentId" });
Assignment.belongsTo(User, { foreignKey: "studentId" });

User.hasMany(Fee, { foreignKey: "studentId" });
Fee.belongsTo(User, { foreignKey: "studentId" });

export { User, NoDues, Approval, Assignment, Fee };