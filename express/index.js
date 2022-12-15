// Index.js - By Joseph Trierweiler - 12/14/2022
const express = require("express");
const app = express();
const PORT = 3000;

// Defines base request behavior
const baseRes = "/";
app.get(baseRes, (req, res) => {
    console.log("Req from: " + req.ip);
    console.log("Res served: " + baseRes + "\n");
    res.send("<div>Base</div>");
});

// Defines hello request behavior
const helloRes = "/hello";
app.get(helloRes, (req, res) => {
    console.log("Req from: " + req.ip);
    console.log("Res served: " + helloRes + "\n");
    res.send("<h1>Hello :)</h1>");
});

// Starts the express server
app.listen(PORT, () => {
    console.log("Express started on port " + PORT);
});