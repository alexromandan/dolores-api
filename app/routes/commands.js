module.exports = function(app) {
     app.post('/commands', (req, res) => {

          res.send('Hello')
        });
};