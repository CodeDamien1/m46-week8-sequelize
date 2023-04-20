const Author = require("./model")

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

module.exports = {
    addAuthor,
}