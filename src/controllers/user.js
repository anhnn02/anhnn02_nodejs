import Auth from "../models/user";
import Invoice from "../models/invoice";
import InvoiceDetail from "../models/invoiceDetail";

export const list = async (req, res) => {
    try {
        const users = await Auth.find({}).exec();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim duoc tai khoan dau em"
        })
    }
}

export const userById = async (req, res, next, id) => {
    try {
        const user = await Auth.findById(id).exec();
         if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        next();

    } catch (error) {
        res.status(400).json({
            msg: "Khong tim duoc tai khoan"
        })
    }
}

export const get = async (req, res) => {
    try {
        const userInfo = await Auth.findOne({ _id: req.params.id }).exec();
        res.json(userInfo);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Khong co user nay"
        })
    }
    
}

export const read = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const user = await Auth.findOne(condition).exec();
        // neu trung ten thi khong can viet: categoryPro: category._id
        const invoices = await Invoice.find({ userId: user._id }).exec();
        res.json({ user, invoices });
    } catch (error) {
        res.status(400).json({
            msg: "Khong tim thay san pham thuoc category!"
        })
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body;
    try {
        const user = await Auth.findOneAndUpdate(condition, update).exec();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
            }
        });
    } catch (err) {
        res.status(400).json({
            msg: "Sua tai khoan khong thanh cong"
        })
    }
}

