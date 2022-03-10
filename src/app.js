// const http = require('http');
// const express = require('express');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRouter from './routes/products';

const app = express();

//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); // server doc du lieu tra ve trong terminal

//routes
app.use("/api", productRouter)

// const server = http.createServer((req, res) => {
//     console.log("Tao server thanh cong!");
    
//     const url = req.url;
//     console.log(url);
//     if(url === "/api/products"){
//         const data = [
//             {id: 1, name: "A"},
//             {id: 2, name: "B"}
//         ]
//         res.end(JSON.stringify(data));
//     } else if(url === "/api/posts") {
//         console.log("API Post");
//     } else {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html><body><h1>Hello Home Page</h1></body></html>");
//         res.end();
//     }
// })


//connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Your PORT ", PORT);
})

 