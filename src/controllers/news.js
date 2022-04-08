import News from "../models/news";

export const list = async (req, res) => {
     try {
        const newsList = await News.find({}).exec();    
        res.json(newsList);
    } catch (err) {
        res.status(400).json({
            msg: "Khong tim duoc bai viet"
        })
    }
}
export const create = async (req, res) => {
    try {
        const news = await new News(req.body).save();
        res.json(news);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Khong them duoc bai viet"
        })
    }
}
export const get = async (req, res) => {
    try {
        const news = await News.findOne({_id: req.params.id}).exec();
        res.json(news);
    } catch (err) {
        res.status(400).json({
            msg: "Khong co bai viet"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const news = await News.findOneAndDelete({_id: req.params.id});
        res.json(news);
    } catch (err) {
        res.status(400).json({
            msg: "Xoa bai viet khong thanh cong"
        })
    }
}
export const update = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const news = await News.findOneAndUpdate(condition, update).exec(); 
        res.json(news);
    } catch (err) {
        res.status(400).json({
            msg: "Sua bai viet khong thanh cong"
        })
    }
}