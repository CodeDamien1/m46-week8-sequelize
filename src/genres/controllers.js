const Genre = require("./model")
const Book = require("../books/model")

const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({ 
            genreName: req.body.genreName,
    });

    const successResponse = {
        message: "success",
        author: author,
    };
    res.status(201).json({message: "success", genre: genre })
    }catch (error){
        console.log(error);
    }
  };

  const getGenreAndBooks = async (req, res) => {
    try {
        console.log(req.params);

        const author = await Genre.findOne({
            where: { genrename: req.params.genrename },
            include: Book,
    });

        res.status(200).json({ message: "success", genre: genre});
    } catch (error) {
        console.log(error);
    }
  };


module.exports = {
    addGenre,
    getGenreAndBooks,
}