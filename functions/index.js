const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
module.exports = function(app) {

     this.helloWorld = functions.https.onRequest((request, response) => {
          response.send("Hello from Firebase!");
         });
     // Other route groups could go here, in the future
};
