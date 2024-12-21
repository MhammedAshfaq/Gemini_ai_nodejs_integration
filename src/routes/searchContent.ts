import express from "express";
import { searchContentGimini } from "../controllers/searchContenet";

const router = express.Router();

router.post("/search/content/gemini", searchContentGimini);

export default router;
