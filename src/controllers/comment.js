import Comment from "../models/comment"

export const create = async (req, res) => {
    try {
        const comment = await new Comment(req.body).save();
        res.json(comment)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Khong them duoc binh luan" }
        )
    }
}
export const list = async (req, res) => {
    try {
        const comments = await Comment.find().populate('userId').populate('productId').sort({ "createdAt": -1 })
        res.json(comments)
    } catch (error) {
        res.status(400).json(
            { error: "Khong lay duoc danh sach comment" }
        )
    }
}

export const get = async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id }).populate('userId').populate('productId')
        res.json(comment)
    } catch (error) {
        res.status(400).json(
            { error: "Khong tim duoc comment" }
        )
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body
    try {
        const comment = await Comment.findOneAndUpdate(condition, update).exec()
        res.json(comment)
    } catch (error) {
        res.status(400).json(
            { error: "Khong update duoc comment" }
        )
    }
}

export const remove = async (req, res) => {
    try {
        const comment = await Comment.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(comment)
    } catch (error) {
        res.status(400).json(
            { error: "Khong xoa duoc comment" }
        )
    }
}