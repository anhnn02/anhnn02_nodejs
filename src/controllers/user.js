import Auth from "../models/user";

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

export const read = async (req, res) => {
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

