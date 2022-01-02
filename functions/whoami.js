const app = require("../js/app.js");
const serverless = require("serverless-http");

// module.exports.handler = serverless(app);

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  // console.log(
  //   `{\ncontext: ${JSON.stringify(context, null, 2)},\nevent: ${JSON.stringify(
  //     event,
  //     null,
  //     2
  //   )}\n}`
  // );
  const result = await handler(event, context);
  // result.body is returned
  // console.log(result);
  return result.body;
  // return {
  //   statusCode: 200,
  //   headers: JSON.stringify(result.headers),
  //   body: JSON.stringify({
  //     ipaddress: event.headers["client-ip"],
  //     language: event.headers["accept-language"],
  //     software: event.headers["user-agent"],
  //   }),
  // };
};

// module.exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify({
//       ipaddress: event.headers["client-ip"],
//       language: event.headers["accept-language"],
//       software: event.headers["user-agent"],
//     }),
//   };
// };
