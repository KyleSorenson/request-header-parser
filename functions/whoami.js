// const app = require("../js/app.js");
// const serverless = require("serverless-http");

// const handler = serverless(app);

// module.exports.handler = async (event, context) => {
//   const result = await handler(event, context);
//   console.log(result);
//   return result;
// };

module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "x-powered-by": "Express",
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
      "content-length": "211",
    },
    body: JSON.stringify({
      ipaddress: event.headers["client-ip"],
      language: event.headers["accept-language"],
      software: event.headers["user-agent"],
    }),
  };
};
