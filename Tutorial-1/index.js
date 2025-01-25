// require('dotenv').config();
const express = require("express");
// import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("first response sent");
})

app.get("/login", (req, res) => {
    res.send("you are at login pages");
})

app.listen(port, () => {
    console.log(`app listening at port:${port}`);
})