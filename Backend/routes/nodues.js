import express from "express";
import auth from "../middleware/auth.js";
import {
    applyNoDues,
    getMyNoDues,
    getAllNoDues,
} from "../controllers/noduesController.js";

const router = express.Router();

router.post("/apply", auth, applyNoDues);
router.get("/my", auth, getMyNoDues);
router.get("/all", auth, getAllNoDues);

export default router;