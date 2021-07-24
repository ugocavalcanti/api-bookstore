import express from "express";
import authorController from "../controllers/author.controller.js";

const router = express.Router();

router.post("/", authorController.insertAuthor)
router.get("/", authorController.getAuthors)
router.get("/:id", authorController.getAuthor)
router.put("/", authorController.updateAuthor)
router.delete("/:id", authorController.deleteAuthor)

export default router;