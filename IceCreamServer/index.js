"use strict";
const http = require("http");
const path = require("path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const { read, send, sendJson, sendError, isIn } = require(path.join(
  __dirname,
  "library",
  "utilities.js"
));

const { getAllFlavours, hasFlavour, getIceCream } = require(path.join(
  __dirname,
  "Storage",
  "iceCreamFreezer.js"
));

const resourceRoutes = ["/styles/", "/js/", "/images/"];
const homePath = path.join(__dirname, "home.html");
const server = http.createServer(async(req,res) =>{
    const {pahtname} = new URL(`http://${req.headers.host}${req.url}`)
    const route = decodeURIComponent(pahtname)
    try{
        if(route === "/"){
            const result = await read(homePath);
            send(res,result);
        } else if (isIn(route, ...resourceRoutes)){
            const result = await read(path.join(__dirname, route))
            send(res,result)
        } else {
            sendError(res,"Not found")
        }
    } catch(err){
        sendError(res, err)
    }
})
server.listen(port,host, () => console.log(`Server ${host}:${port} listening`))