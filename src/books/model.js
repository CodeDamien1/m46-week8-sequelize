const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    author: {
        DataTypes.STRING,
    },
    genre: {
        DataTypes.STRING,
    },
});

module.exports = Book;