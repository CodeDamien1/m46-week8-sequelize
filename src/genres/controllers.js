const Genre = require("./model")
const Book = require("../books/model")

const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({ 
            genreName: req.body.genreName,
        });

        const successResponse = {
            message: "success",
            genre: genre,
        };

    res.status(201).json({message: "success", genre: genre })
    }catch (error){
        res.status(501).json({message: error.message, error: error});
    }
};

const getGenreAndBooks = async (req, res) => {
    try {
        console.log(req.params);

        const genre = await Genre.findOne({
            where: { genrename: req.params.genrename },
            include: Book,
        });

    res.status(200).json({ message: "success", genre: genre});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

module.exports = {
    addGenre,
    getGenreAndBooks,
}