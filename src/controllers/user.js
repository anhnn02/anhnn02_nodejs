import Auth from "../models/user";

export const list = async (req, res) => {
    try {
        const users = await Auth.find({}).exec();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim duoc tai khoan"
        })
    }
}

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        res.profile = user;
    } catch (error) {
        res.status(400).json({
            msg: "Khong tim duoc tai khoan"
        })
    }
}

export const read = (req, res) => {
    const user = req.profile;
    
    // user.hashed_password = undefined;
    // user.salt = undefined;

    res.json(user)
}

