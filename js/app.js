require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const { Router } = require("express");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

module.exports = app;
