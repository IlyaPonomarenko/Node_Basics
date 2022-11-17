"use strict"

const fs = require("fs").promises;
const path = require("path")

const MIMETYPES = require("./mimetypes.json")

const read = filePath =>{
    const extension = path.extname(filePath).toLowerCase();
    const mime = MIMETYPES[extension] || {type:"application/octet-stream", encoding:"binary"};
    return fs.readFile(filePath, mime.encoding)
    .then(fileData =>({fileData, mime}))
    .catch(err => err)
};
 
const send = (res, resource) =>{ //resource is an object 
    res.writeHead(200,{
        "Content-Type":resource.mime.type,
        "Content-Length":Buffer.byteLength(resource.fileData,resource.mime.encoding)
    });
    res.end(resource.fileData, resource.mime.encoding)
}
module.exports = {read}