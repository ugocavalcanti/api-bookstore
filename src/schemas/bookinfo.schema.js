import mongoose from "mongoose";
import AvaliacaoSchema from "./review.schema.js";

const BookInfoSchema = new mongoose.Schema(
    {
        bookId: Number,
        description: String,
        pages: Number,
        publisher: String,
        reviews: [AvaliacaoSchema]
    },
    {
        collection: "livrosinfo"
    }
)

    export default BookInfoSchema;