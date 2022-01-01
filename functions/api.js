const app = require("../js/app.js");

// Netlify Serverless Lamda Function
const serverless = require("serverless-http");
module.exports.handler = serverless(app);
