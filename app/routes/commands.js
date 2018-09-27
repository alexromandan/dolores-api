const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');


module.exports = function(app) {
  app.post('/commands', (request, response) => {
    response.send(
      functions.https.onRequest((request, response) => {
      
        const agent = new WebhookClient({ request, response });
        //console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
        //console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
       
        function welcome(agent) {
          agent.add(`Welcome to Alex!`);
        }
       
        function fallback(agent) {
          agent.add(`I didn't understand`);
          agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('Default Welcome Intent', welcome);
        intentMap.set('Default Fallback Intent', fallback);
        // intentMap.set('your intent name here', yourFunctionHandler);
        // intentMap.set('your intent name here', googleAssistantHandler);
        agent.handleRequest(intentMap);
    }));
  });
};