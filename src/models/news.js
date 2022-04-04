import mongoose, {Schema } from  "mongoose";
const {ObjectId} = mongoose.Types;

const newsSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    img: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    categoryNews: {
        type: ObjectId,
        ref: 'CategoryNews'
    }
}, {timestamps: true});

export default mongoose.model('News', newsSchema);