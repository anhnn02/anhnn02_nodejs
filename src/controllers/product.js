import Product from "../models/product";

export const list = async (req, res) => {
    try {
        const products = await Product.find().populate('categoryPro');
        res.json(products);
        // return res.status(200).json({
        //     status: true,
        //     docs: products
        // }) 
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: "Khong tim duoc san pham"
        })
    }
}
export const create = async (req, res) => {
    console.log(req.body)
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
        console.log(err);
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
    const condition = { _id: req.params.id }
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

export const search = async (req, res) => {
    try {
        const searchField = req.query.name;
        const product = await Product.find({ name: { $regex: searchField, $options: '$i' } })
        if (searchField == "") {
            res.json("")
        } else {
            res.json(product)
        }
    } catch (error) {
        res.status(400).json(
            { error: "Khong tim thay san pham" }
        )
    }
}

export const page = async (req, res) => {
    try {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 5;
        const skip = limit * (page - 1)
        const sort = req.query.sort || '-createAt'
        const product = await Product.find().limit(limit).skip(skip).sort(sort)
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Khong tim thay san pham" }
        )
    }
}