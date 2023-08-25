const {writeFileSync, readFileSync} = require('fs');
const path = require('path');

module.exports ={
    readJson : (json) =>{
        return JSON.parse(readFileSync(path.join(__dirname, json)))
    },
    writeJson : (list, name) =>{
        writeFileSync(path.join(__dirname,name),JSON.stringify(list, null, 2),"utf-8");
    }
}
