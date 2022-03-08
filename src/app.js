// const http = require('http');
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Home");
})

app.get("/api/products", (req, res) => {
     const data = [
        {id: 1, name: "Anh"},
        {id: 2, name: "B"}
    ]
    res.json(data);
})

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

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Your PORT ", PORT);
})

 