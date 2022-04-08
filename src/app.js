import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose  from 'mongoose';
import { readdirSync } from 'fs';
import path, { dirname } from 'path';
import routerProduct from './routes/products';
import routerNews from './routes/news';
import routerAuth from './routes/auth';
import routerUser from './routes/user';
import routerCateProduct from './routes/categoryPro';
import routerCateNews from './routes/categoryNews';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import routerInvoice from './routes/invoice';
import routerInvoiceDetail from './routes/invoiceDetail';

const app = express();
const swaggerJSDocs = YAML.load("./api.yaml")

//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); // server doc du lieu tra ve trong terminal

//routes
// readdirSync(`${__dirname}/routes`).forEach(async (fileName) => {
//     import("./routes/" + fileName)
//         .then(({default: router}) => router.default)
//         .then((router) => app.use("/api", router))
// }) ;
app.use("/api", routerProduct);
app.use("/api", routerNews);
app.use("/api", routerAuth);
// danh sách
app.use("/api", routerUser);
app.use("/api", routerCateProduct);
app.use("/api", routerCateNews);
app.use("/api", routerInvoice);
app.use("/api", routerInvoiceDetail);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))

// connection db
mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("Connect database successfully!"))
    .catch(err => console.log(err))

//connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Your PORT ", PORT);
})

 