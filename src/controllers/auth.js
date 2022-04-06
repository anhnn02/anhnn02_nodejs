import Auth, {} from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const {email, name, password} = req.body;
    try {
        const existUser = await Auth.findOne({email}).exec()
        if(existUser) {
            return res.status(400).json({
                msg: "Tai khoan da ton tai"
            })
        }
        
        const user = await new Auth({email, name, password}).save();

        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
            }
        });
    } catch (error) {
        console.log("error", error);
        res.status(400).json({
            error: "Khong dang ki duoc tai khoan"
        })
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await Auth.findOne({email}).exec();

        if(!user) {
            res.status(400).json({
                error: "Tai khoan khong ton tai"
            })
        }
        if(!user.authenticate(password)) {
            res.status(400).json({
                error: "Sai tai khoan hoac mat khau"
            })
        }
        const token = jwt.sign({_id: user._id}, "abc" );
        
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
       
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Dang nhap that bai"
        })
    }
}


