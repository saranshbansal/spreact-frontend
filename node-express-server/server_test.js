var http = require("http");
var events = require("events");

var eventEmitter = new events.EventEmitter();

// Node's own http server
var server = http.createServer((req, res) => {
  eventEmitter.emit("Emitting event: Server start!", req); // Emitter
  res.end("server works!");
});

eventEmitter.on("Emitting event: Server start!", req => {
  console.log("A request has been made on the server.", req.method);
}); // Litsener

server.listen(3000, "localhost", () => {
  console.log("Server started!");
});
