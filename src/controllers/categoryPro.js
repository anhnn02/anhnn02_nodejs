import Category from "../models/categoryPro";
import Product from "../models/product";

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Khong them duoc category!"
        })
    }
}
export const list = async (req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay category!"
        })
    }
}
export const read = async (req, res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOne(condition).exec();
        // neu trung ten thi khong can viet: categoryPro: category._id
        const products = await Product.find({categoryPro: category._id}).select('-categoryPro').exec();
        res.json({category, products});
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay san pham thuoc category!"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body;
    try {
        const category = await Category.findOneAndUpdate(condition, update).exec();
        res.json(category);
    } catch (err) {
        console.log("err", err);
        res.status(400).json({
            error: "Sua category khong thanh cong"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id});
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Khong xoa duoc!"
        })
    }
}
export const get = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay category!"
        })
    }
}
export const relatedProduct = async (req, res) => {
    const idPro = req.params.idPro
    const condition = { _id: req.params.id }
    try {
        const category = await Category.findOne(condition).exec();
        // neu trung ten thi khong can viet: categoryPro: category._id
        const products = await Product.find({ categoryPro: category._id }).select('-categoryPro').exec();
        const relatedProduct = products.filter((item) => item._id != idPro)
        res.json({ category, relatedProduct });
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay san pham thuoc category!"
        })
    }
}