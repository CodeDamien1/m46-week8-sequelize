const Author = require("./model")
const Book = require("../books/model")

const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({ 
            authorName: req.body.authorName,
    });

    const successResponse = {
        message: "success",
        author: author,
    };
    res.status(201).json({message: "success", author: author })
    }catch (error){
        console.log(error);
    }
  };

  const getAuthorAndBooks = async (req, res) => {
    try {
        console.log(req.params);

        const author = await Author.findOne({
            where: { authorname: req.params.authorname },
            include: Book,
    });

        res.status(200).json({ message: "success", author: author});
    } catch (error) {
        console.log(error);
    }
  };


module.exports = {
    addAuthor,
    getAuthorAndBooks,
}