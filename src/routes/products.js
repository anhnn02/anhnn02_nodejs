import { Router } from 'express';
const router = Router();

const data = [
    {id: 1, name: "Anh"},
    {id: 2, name: "B"}
]

const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin) {
        next();
    } else {
        console.log("Goodbye!");
    }
}

router.get("/users", checkAuth, (req, res) => {
    const users = [
        {id: 1, name: "A"},
        {id: 2, name: "B"}
    ]
    res.json(users);
})

router.get("/creat-user", checkAuth,  (req, res) => {
    res.send("Hello Home");
})

router.get("/products", checkAuth, (req, res) => {
    res.json(data);
})
router.post("/products", checkAuth, (req, res) => {
    data.push(req.body);
    console.log(data)
    res.json(data);
})
router.get("/product/:id", checkAuth, (req, res) => {
    res.json(data.find((item) => item.id == req.params.id));
})
router.delete("/products/:id", checkAuth, (req, res) => {
    res.json(data.filter((item) => item.id != req.params.id));
})
router.put("/products/:id", checkAuth, (req, res) => {
    const result = data.map((item) => item.id == req.params.id ? req.body : item);
    res.json(result);
})

export default router;