import { getBarbieById, getAllBarbies, createBarbie, deleteBarbie } from "../controllers/barbieController.js";
import express from "express"

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbieById);
router.post("/", createBarbie);
router.delete("/:id", deleteBarbie);

export default router;