import express from "express";
import auth from "../middleware/auth.js";
import {
    createApproval,
    updateApproval,
    getApprovals,
} from "../controllers/approvalController.js";

const router = express.Router();

router.post("/", auth, createApproval);
router.put("/:id", auth, updateApproval);
router.get("/", auth, getApprovals);

export default router;