
const commands = require('./commands');

module.exports = function(app) {
  commands(app);
  // Other route groups could go here, in the future
};