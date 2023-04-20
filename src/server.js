require("dotenv").config();
const express = require("express");
// books routes
const Book = require("./books/model");
const bookRouter = require("./books/routes");
//author routes
const Author = require("./books/model");
const authorRouter = require("./authors/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

//request will hit bookrouter then pass it down to the book routes
app.use(bookRouter);
app.use(authorRouter);


const syncTables = () => {
    Book.sync();
    Author.sync();
};


app.get("/health", (req, res) => {
    res.status(200).json({ message: "App is Healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log("server is listening");
});
