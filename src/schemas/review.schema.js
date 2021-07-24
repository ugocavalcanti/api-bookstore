import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        name: String,
        grade: Number,
        review: String
    },
    {
        collection: "livrosinfo"
    }
)

export default ReviewSchema;