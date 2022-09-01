const e = require("express");
const fs = require("fs");
const util = require("util");

// basic file reading
const readFromFile = util.promisify(fs.readFile);

// basic file writing
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`Data written to ${destination}`)
  );

// read existing db file, add new note to the data, and write the updated data to the db file
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

// use the note id to filter everything except the note in question from the db file data and write this modified data to the db file
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
