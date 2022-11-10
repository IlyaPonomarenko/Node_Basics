"use strict";

const http = require("http");
const path = require("path");
const fs = require("fs")

const { port, host } = require("./config.json");

const homePath = path.join(__dirname, "home.html");