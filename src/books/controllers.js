const Book = require("./model");

// ============================= how to add the book function =================================

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      AuthorId: req.body.AuthorId
    });
    res.status(201).json({ message: "success", book: book });

  } catch (error) {
    res.status(501).json({message: error.message, error: error});
  }
};

//================== How to get all books function ===================

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ message: "success", books: books });

  } catch (error) {
    res.status(501).json({message: error.message, error: error});
  }
};
//------------------------------------------------------------------------

// ====================== how to update books and adding where function ======================
//// UPDATE Books.author WHERE Books.title = "damien's book"
const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update({
            author: req.body.newAuthor,
        },
        {
          where: {
              title: req.body.title,
          },
        });
        res.status(201).json({ message: "success", updateResult: updateBook });

    } catch (error) {
      res.status(501).json({message: error.message, error: error});
    }
};
//------------------------------------------------------------------------

//================== Delete function for Books ===================

const deleteBook = async (req, res) => {
    try {
      const { title } = req.body;

      const book = await Book.destroy({
          where: {
              title: title,
          },
      });

    res.status(201).json({ message: "success", result: book });
    } catch (error) {
      res.status(501).json({message: error.message, error: error});
    }
};
//------------------------------------------------------------------------

//================== Exporting all Modules Called Upon ===================

module.exports = {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
//_______________________________________________________________________
//// this is an object
//// {"title": req.body.title, etc}
//// for authors