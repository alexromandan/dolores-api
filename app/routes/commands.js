const functions = require('firebase-functions');


module.exports = function(app) {
  app.post('/commands', (req, res) => {
    res.send(
      functions.https.onRequest((req, res) => {
      res.send({
        speech: "Hello from Firebase!"
      });
    }));
  });
};