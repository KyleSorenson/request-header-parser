const app = require("../js/app.js");
const serverless = require("serverless-http");

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  console.log(result);
  return result;
};
