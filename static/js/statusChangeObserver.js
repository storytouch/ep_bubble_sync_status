var $ = require('ep_etherpad-lite/static/js/rjquery').$;
var api = require('./api');

exports.initialize = function() {
  _triggerStatusChangeWhenTargetIsShown('syncstatussyncing', 'saving');
  _triggerStatusChangeWhenTargetIsShown('syncstatusdone', 'saved');
}

var _triggerStatusChangeWhenTargetIsShown = function(targetElementId, status) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var newObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (_startedShowingTarget(mutation)) {
        api.triggerStatusChanged(status);
      }
    });
  });

  newObserver.observe(document.getElementById(targetElementId), { attributes: true });
}

var _startedShowingTarget = function(mutation) {
  return mutation.attributeName === 'style' && $(mutation.target).css('display') !== 'none';
}
