var statusChangeObserver = require('./statusChangeObserver');

exports.postAceInit = function(hook, context) {
  statusChangeObserver.initialize();
}
