const express = require('express');
const path = require('path');

const PORT= 3030;
const app = express();


app.use(express.static("public"));

app.get("/carrito", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "carrito.html"))
);

app.listen(PORT, () => { console.log(`Server listening on http://localhost:${PORT}`)})