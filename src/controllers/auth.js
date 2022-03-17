import Auth from "../models/auth";

export const list = async (req, res) => {
     try {
        const users = await Auth.find({}).exec();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim duoc san pham"
        })
    }
}

export const register = async (req, res) => {
    try {
        const user = await new Auth(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Khong dang ki duoc"
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await Auth.findOne({email: req.body.email}).exec();
        res.json(user)
        // if(res.json(user) != null) {
        //     if(res.json(user.password) == req.body.password) {
        //         console.log("Ok", res.json(user))
        //     } 
        //     // else { console.log("Sai tai khoan hoac mat khau")}
        // }else{ console.log("Goodbye")}
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay tai khoan"
        })
    }
}


