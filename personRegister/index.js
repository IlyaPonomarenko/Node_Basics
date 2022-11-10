"use strict";

const http = require("http");
const { homedir } = require("os");
const path = require("path");
const { send } = require("process");

const { sendFile } = require("./library/utilities");
const { search } = require("./storage/personDatalayer");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const hopePath = path.join(__dirname, "home.html");

const server = http.createServer((req, res) => {
  const { pathname, searchParams } = new URL(
    `http://${req.headers.host}${req.url}`
  );
  const route = decodeURIComponent(pathname);

  if (route === "/") {
    sendFile(res, homePath);
  } else if (route.startsWith("/styles/")) {
    sendFile(res, path.join(__dirname, route), "text/css");
  } else if (route.startsWith("/js/")) {
    sendFile(res, path.join(__dirname, route), "text/javascript");
  } else {
    let result = [];
    if (route === "/person") {
      result = search();
    } else if (route === "/persons/firstname") {
        result=search("firstname", searchParams.get("value"))
    } else if (route === "/persons/lastname"){
        result = search("lastname",searchParams.get("value"))
    } else if (route === "/persons/age"){
        result=search("age", searchParams.get("value"))
    } else {
        result={message:"key not found"}
    }
  }
});
