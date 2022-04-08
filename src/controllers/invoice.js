import Invoice from "../models/invoice";
import InvoiceDetail from "../models/invoiceDetail";

export const list = async (req, res) => {
    try {
        const invoice = await Invoice.find({}).exec();
        res.json(invoice);
    } catch (error) {
        res.status(400).json({
            msg: "Khong tim thay invoice!"
        })
    }
}
export const create = async (req, res) => {
    console.log(req.body)
    try {
        const invoice = await new Invoice(req.body).save();
        res.json(invoice);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Khong them duoc hoa don"
        })
    }
}
export const get = async (req, res) => {
    try {
        const invoice = await Invoice.findOne({ _id: req.params.id }).exec();
        res.json(invoice);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Khong co hoa don"
        })
    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const invoice = await Invoice.findOne(condition).exec();
        // neu trung ten thi khong can viet: categoryPro: category._id
        const invoiceDetails = await InvoiceDetail.find({ invoiceId: invoice._id }).select('-categoryPro').exec();
        res.json({ invoice, invoiceDetails });
    } catch (error) {
        res.status(400).json({
            msg: "Khong tim thay hoa don va chi tiet hoa don!"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const invoice = await Invoice.findOneAndDelete({ _id: req.params.id });
        res.json(invoice);
    } catch (err) {
        res.status(400).json({
            msg: "Xoa hoa don khong thanh cong"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body;
    try {
        const invoice = await Invoice.findOneAndUpdate(condition, update).exec();
        res.json(invoice);
    } catch (err) {
        res.status(400).json({
            msg: "Sua hoa don khong thanh cong"
        })
    }
}
