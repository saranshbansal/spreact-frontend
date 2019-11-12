var express = require("express");
var http = require("http");
var fs = require("fs");

// Server created by Express && http
var app = express();
var server = http.createServer(app);

app.get("/", (req, res) => {
  res.end("<h1>Express Server Up!</h1>");
});

app.get("/courses", (req, res) => {
  fs.readFile("./db.json", (err, data) => {
    const tasks = JSON.parse(data.toString());
    res.json(tasks);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server started!");
});
