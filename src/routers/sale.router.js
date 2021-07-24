import express from "express";
import saleController from "../controllers/sale.controller.js";

const router = express.Router();

router.post("/", saleController.insertSale)
router.get("/", saleController.getSales)
router.get("/:id", saleController.getSale)
router.get("/:idauthor", () => {})

export default router;