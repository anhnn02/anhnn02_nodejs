import mongoose, {Schema } from  "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId; 

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
    },
    slug: {
        type: String,
    },
    regularPrice: {
        type: String,
        required: true,
    },
    salePrice: {
        type: String,
    },
    img: {
        type: String,
        // required: true,
    },
    desc: {
        type: String,
    },
    size: {
        type: String,
        required: true,
    },
    categoryPro: {
        type: ObjectId,
        ref: 'CategoryPro'
    }
}, {timestamps: true});

export default mongoose.model('Product', productSchema);