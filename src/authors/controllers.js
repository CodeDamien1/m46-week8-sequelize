const Author = require("./model")
const Book = require("../books/model")


//================================= Adding An Author ====================================
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
//_______________________________________________________________________________________

//============================ Getting Both Authors And Books Belonging To Them ===============================
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
//_______________________________________________________________________________________

module.exports = {
    addAuthor,
    getAuthorAndBooks,
}