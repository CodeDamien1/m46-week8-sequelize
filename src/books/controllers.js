const Book = require("./model");

//this function adds a new book to the database
//when funtion has a .function it is a class
const addBook = async (req, res) => {
    try {
        const book = await Book.create({ 
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });
        res.status(201).json({message: "success", book: book })
    }catch (error) {
        console.log(error);
    }
};
// const users = await User.findAll(); <----- finds all books


//calls on the get all books route
const getAllBooks = async (req, res) => {
    try {
    const books = await Book.findAll();
        console.log(books);
    res.send(200).json({message: "success", books: books });
    }catch (error) {
    console.log(error);
    };
};

const updateBook = async (req, res) => {
    try {
    const updateBook = await Book.update(
        {
            author: req.body.newAuthor
        },
        {
            where: {
                title: req.body.title,
            },
        }
    );
        console.log(books);
    res.send(201).json({message: "success", updateResult: updateBook });
    }catch (error) {
    console.log(error);
    };
};
module.exports = {
    addBook,
    getAllBooks,
    updateBook,
}
// this is an object
//{"title": req.body.title, etc}


//for authors