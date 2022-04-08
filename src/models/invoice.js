import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema({
    fullname: {
        type: String,
        minLength: 5,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        default: 0
    },
    note: {
        type: String,
    },

}, { timestamps: true });

export default mongoose.model('Invoice', invoiceSchema);