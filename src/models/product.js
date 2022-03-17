import mongoose, {Schema } from  "mongoose";
const {ObjectId} = mongoose.Types; 
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    categoryPro: {
        type: ObjectId,
        ref: 'CategoryPro'

    }
}, {timestamps: true});

export default mongoose.model('Product', productSchema);