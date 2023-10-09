import { Router } from "express";
import {
    renderData,
} from "../controllers/adminController.js";
const router = Router();

router.get("/" , renderData);

export default router;