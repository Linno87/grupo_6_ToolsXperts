const { readFileSync, writeFileSync } = require("fs");
const path = require('path');

const readJson = (json) =>
  JSON.parse(readFileSync(path.join(__dirname, json), "utf-8"));

const writeJson = (array, file) =>
  writeFileSync(
    path.join(__dirname, file),
    JSON.stringify(array, null, 3),
    "utf-8"
  );

module.exports = {
  readJson,
  writeJson,
};
