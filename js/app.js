require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Parse Header
const apiRouter = express.Router();

apiRouter.get("/whoami", function (req, res) {
  // console.log(req.headers);
  // console.log(req.accepted)
  res.json({
    ipaddress: req.ip,
    language: req.header("accept-language"),
    software: req.header("user-agent"),
  });
});

app.use("/api", apiRouter);

module.exports = app;
