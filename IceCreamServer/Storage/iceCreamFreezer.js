const path = require("path")
const {read} = require("../library/utilities");
const jsonPath = path.join(__dirname, "iceCream.json")

const getAllFlavours = async () =>{
    try{
        const data = await read(jsonPath);
        const iceCreams =  await JSON.parse(data.fileData)
        return Object.keys(iceCreams)
    } catch(err){
        return [];
    }
};
const hasFlavour = async flavour =>{
    try{
        const data = await read(jsonPath)
        const iceCreams = await JSON.parse(data.fileData)
        return Object.keys(iceCreams).includes(flavour)
    } catch(err) {
        return false;
    }
}
const getIceCream = async flavour =>{
    try{
        const data = await read(jsonPath)
        const iceCreams = await JSON.parse(data.fileData)
       return iceCreams[flavour] || null;
    } catch(err) {
        return null;
    }
}
module.exports = {getIceCream, getAllFlavours, hasFlavour}