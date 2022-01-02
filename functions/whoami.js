const app = require("../js/app.js");

module.exports.handler = function (event, context, callback) {
  console.log(
    `{\ncontext: ${JSON.stringify(context, null, 2)},\nevent: ${JSON.stringify(
      event,
      null,
      2
    )}\n}`
  );
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      ipaddress: event.headers["client-ip"],
      language: event.headers["accept-language"],
      software: event.headers["user-agent"],
    }),
  });
};
