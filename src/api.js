import express from "express";
import clientRouter from "./routers/client.router.js";
import authorRouter from "./routers/author.router.js";
import bookRouter from "./routers/book.router.js";
import saleRouter from "./routers/sale.router.js";

const app = express();

app.use(express.json())

app.use("/client", clientRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/sale", saleRouter);

export default app;