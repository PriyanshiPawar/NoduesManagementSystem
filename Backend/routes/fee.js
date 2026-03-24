import express from "express";
import auth from "../middleware/auth.js";
import {
    addFee,
    getFees,
    updateFee,
} from "../controllers/feeController.js";

const router = express.Router();

router.post("/", auth, addFee);
router.get("/", auth, getFees);
router.put("/:id", auth, updateFee);

export default router;