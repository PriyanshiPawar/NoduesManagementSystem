import express from "express";
import auth from "../middleware/auth.js";
import {
    createAssignment,
    getAssignments,
    updateAssignment,
} from "../controllers/assignmentController.js";

const router = express.Router();

router.post("/", auth, createAssignment);
router.get("/", auth, getAssignments);
router.put("/:id", auth, updateAssignment);

export default router;