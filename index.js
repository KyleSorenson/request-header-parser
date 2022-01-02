const express = require("express");
const app = require("./js/app.js");

// Parse Header
const apiRouter = express.Router();

apiRouter.get("/whoami", function (req, res) {
  console.log(req.headers);
  // console.log(req.accepted)
  res.json({
    ipaddress: req.ip,
    language: req.header("accept-language"),
    software: req.header("user-agent"),
  });
});

app.use("/api", apiRouter);

const path = require("path");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("dist"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
