require("dotenv").config();
const express = require("express");

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const syncTables = () => {
    Book.sync();
};
//request will hit bookrouter then pass it down to the book routes
app.use(bookRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "App is Healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log("server is listening");
});
