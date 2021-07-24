import express from "express";
import bookController from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", bookController.insertBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.put("/", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
router.post("/info", bookController.insertBookInfo);
router.put("/info", bookController.updateBookInfo);
router.delete("/info/:bookid", bookController.deleteBookInfo);
router.post("/:bookid/review", bookController.insertReview)
router.delete("/:bookid/review/:index", bookController.deleteReview)

export default router;