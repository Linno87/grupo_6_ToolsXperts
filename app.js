const express = require('express');
const path = require('path');

const PORT= 3030;
const app = express();


app.use(express.static("public"));

app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"views", "register.html")))

app.listen(PORT, () => { console.log(`Server listening on http://localhost:${PORT}`)})