import Product from "../models/product";

export const list = async (req, res) => {
     try {
        const products = await Product.find({}).exec();
        res.json(products);
    } catch (err) {
        res.status(400).json({
            error: "Khong tim duoc san pham"
        })
    }
}
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Khong them duoc san pham"
        })
    }
}
export const get = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product);
    } catch (err) {
        res.status(400).json({
            error: "Khong co san pham"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id});
        res.json(product);
    } catch (err) {
        res.status(400).json({
            error: "Xoa san pham khong thanh cong"
        })
    }
}
export const update = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec();
        res.json(product);
    } catch (err) {
        res.status(400).json({
            error: "Sua san pham khong thanh cong"
        })
    }
}