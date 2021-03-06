// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// make all the files in 'public' available
app.use(express.static("public"));
app.use(express.static("pokemon_public"));
app.use(express.static("todo_public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get("/pokemon", (req, res) => {
  res.sendFile(__dirname + "/views/pokemon/index.html");
});

app.get("/todo" , (req, res) => {
  res.sendFile(__dirname + "/views/todo/index.html");
});

app.get("/guess", (req, res) => {
  res.sendFile(__dirname + "/views/guess/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
  console.log(__dirname);
});
