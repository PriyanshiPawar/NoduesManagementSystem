import express from "express";
import bodyParser from "body-parser";
import sequelize from "./config/db.js";



import authRoutes from "./routes/auth.js";
import noduesRoutes from "./routes/nodues.js";
import assignmentRoutes from "./routes/assignment.js";
import feeRoutes from "./routes/fee.js";
import approvalRoutes from "./routes/approval.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/nodues", noduesRoutes);
app.use("/api/assignment", assignmentRoutes);
app.use("/api/fee", feeRoutes);
app.use("/api/approval", approvalRoutes);

app.get("/", (req, res) => {
    res.send("NDMS Backend Running 🚀");
});

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected ✅");

        await sequelize.sync();
        console.log("Tables created ✅");

        app.listen(5000, () => {
            console.log("Server running on http://localhost:5000 🚀");
        });

    } catch (error) {
        console.error(error);
    }
};

start();