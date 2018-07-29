'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello there, I am a lambda function!',
      input: event,
    }),
  };

  // You can see console log streams on CloudWatch in your lambda function's
  // Lambda Management Console on AWS.
  // Navigate to "Monitoring" > "View logs in CloudWatch" > Click on a log stream.
  console.log('Hello lambda function speaking from console logs!');

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
