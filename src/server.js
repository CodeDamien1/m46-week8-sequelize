require("dotenv").config();
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({ message: "App is Healthy"});
});


app.listen(5001, () => {
    console.log("server is listening");
});
