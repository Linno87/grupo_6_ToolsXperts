const express = require('express');
const path = require('path');

const PORT= 3030;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/detalle", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "detalle.html"))
);
app.get("/footer", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "footer.html"))
);
app.listen(PORT, () => { console.log(`Server listening on http://localhost:${PORT}`)})