import mongoose, {Schema } from  "mongoose";

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model('CategoryPro', categorySchema);