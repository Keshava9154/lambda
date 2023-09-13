/**
 * index.mjs 
 **/
 /**const SecretsManager = require('./SecretsManager.js');**/
 
 import secretsManager from './secretsManager.js';

 exports.handler = async (event) => {
     // TODO implement
     var secretName = 'Development';
     var region = 'us-east-2';
     var apiValue = await secretsManager.getSecret(secretName, region);
     console.log(apiValue); 
     const response = {
         statusCode: 200,
         body: JSON.stringify('Hello from Lambda! Byeeee'),
     };
     return response;
 };

export const handler = async function(event, context) {
  event.Records.forEach(record => {
    const { body } = record;
    console.log(body);
  });
  return {};
};
