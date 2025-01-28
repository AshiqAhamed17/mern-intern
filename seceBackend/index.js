const express = require("express");
const path = require("path");
const PORT = 3000;

//mongodb://localhost:27017/

const app = express();

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
})

app.get("/static", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
});

