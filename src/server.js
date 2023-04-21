require("dotenv").config();
const express = require("express");

// books routes
const Book = require("./books/model");
const bookRouter = require("./books/routes");

//author routes
const Author = require("./authors/model");
const authorRouter = require("./authors/routes");

//Genre Routes
const Genre = require("./genres/model");
const genreRouter = require("./genres/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const syncTables = () => {
    Author.hasMany(Book);
    Book.belongsTo(Author);

    Genre.hasMany(Book);
    Book.belongsTo(Genre);

    Author.sync();
    Genre.sync();
    Book.sync({alter: true});
};

//request will hit bookrouter then pass it down to the book routes
app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "App is Healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log("server is listening");
});
