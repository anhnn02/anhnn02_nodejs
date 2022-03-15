import mongoose, {Schema } from  "mongoose";

const AuthSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export default mongoose.model('Auth', AuthSchema);