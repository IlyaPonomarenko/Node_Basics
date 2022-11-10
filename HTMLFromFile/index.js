"use strict";

const http = require("http");
const path = require("path");
const fs = require("fs")

const { port, host } = require("./config.json");

const homePath = path.join(__dirname, "home.html");

const server = http.createServer((req, res) =>{
    fs.readFile(homePath,"utf8", (err, data)=>{
        if (err) {
            res.statusCode=404;
            res.end(err.message); //for debugging
        }
    })
})