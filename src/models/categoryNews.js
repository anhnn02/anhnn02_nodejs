import mongoose, {Schema } from  "mongoose";

const categorySchema = new Schema ({
    name: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model('CategoryNews', categorySchema);