const express = require('express');
const path = require('path');

const PORT= 3030;
const app = express();


app.use(express.static("public"));

app.get("/header",(req,res)=> res.sendFile(path.join(__dirname,"views", "header.html")))

app.listen(PORT, () => { console.log(`Server listening on http://localhost:${PORT}`)})