var SYNC_STATUS_CHANGED = 'sync_status_changed';

exports.triggerStatusChanged = function(newStatus) {
  var message = {
    type: SYNC_STATUS_CHANGED,
    status: newStatus,
  };

  _triggerEvent(message);
}

var _triggerEvent = function _triggerEvent(message) {
  // if there's a wrapper to Etherpad, send data to it; otherwise use Etherpad own window
  var target = window.parent ? window.parent : window;
  target.postMessage(message, '*');
}

