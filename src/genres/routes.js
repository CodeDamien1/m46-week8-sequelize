const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getGenreAndBooks } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getgenreandbooks/:genrename", getGenreAndBooks);

module.exports = genreRouter
