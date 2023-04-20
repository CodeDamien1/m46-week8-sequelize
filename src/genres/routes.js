const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getGenreAndBooks } = require("./controllers");

authorRouter.post("/authors/addgenre", addGenre);
authorRouter.get("/authors/getgenreandbooks/:authorname", getGenreAndBooks);

module.exports = genreRouter
