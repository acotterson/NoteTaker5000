// get packages
const express = require("express");
const path = require("path");
const { clog } = require('./middleware/clog');
// api routes
const api = require("./routes/index.js");

// set port to open (env port for heroku)
const PORT = process.env.PORT || 3001;

// use express
const app = express();

// middleware to console log server requests
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// /notes sends the notes.html file to client
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/notes.html"))
);

// any other path sends index.html to the client
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// listen for server calls on specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
