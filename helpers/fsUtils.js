const e = require("express");
const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`Data written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const deleteFromFile = (id, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parseData = JSON.parse(data);
      //   https://stackoverflow.com/questions/8163859/how-can-i-get-data-in-json-array-by-id
      const minusDeleted = parseData.filter(function (parseData) {
        return parseData["id"] !== id;
      });
      writeToFile(file, minusDeleted);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, deleteFromFile };
