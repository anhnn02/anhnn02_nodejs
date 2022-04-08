import InvoiceDetail from "../models/invoiceDetail";

export const list = async (req, res) => {
    try {
        const invoiceDetail = await InvoiceDetail.find().populate('InvoiceDetailId');
        res.json(invoiceDetail);
    } catch (error) {
        return res.status(400).json({
            status: false,
            msg: "Khong tim duoc hoa don"
        })
    }
}
export const create = async (req, res) => {
    console.log(req.body)
    try {
        const invoiceDetail = await new InvoiceDetail(req.body).save();
        res.json(invoiceDetail);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Khong them duoc hoa don"
        })
    }
}
export const get = async (req, res) => {
    try {
        const invoiceDetail = await InvoiceDetail.findOne({ _id: req.params.id }).exec();
        res.json(invoiceDetail);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Khong co hoa don"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const invoiceDetail = await InvoiceDetail.findOneAndDelete({ _id: req.params.id });
        res.json(invoiceDetail);
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
        const invoiceDetail = await InvoiceDetail.findOneAndUpdate(condition, update).exec();
        res.json(invoiceDetail);
    } catch (err) {
        res.status(400).json({
            msg: "Sua hoa don khong thanh cong"
        })
    }
}
