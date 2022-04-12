import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    // parentId: {

    // },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    userId: {
        type: ObjectId,
        ref: "Auth"
    }
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);