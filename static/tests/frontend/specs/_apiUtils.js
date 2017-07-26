var ep_bubble_sync_status_test_helper = ep_bubble_sync_status_test_helper || {};
ep_bubble_sync_status_test_helper.apiUtils = {
  DATA_CHANGED_EVENT: 'sync_status_changed',
  lastDataSent: undefined,

  startListeningToApiEvents: function() {
    var self = this;
    var outboundApiEventsTarget = helper.padChrome$.window.parent;

    outboundApiEventsTarget.addEventListener('message', function(e) {
      if (e.data.type === self.DATA_CHANGED_EVENT) {
        self.lastDataSent = e.data.status;
      }
    });
  },

  waitForDataToBeSent: function(done) {
    var self = this;
    helper.waitFor(function() {
      return self.lastDataSent;
    }, 2000).done(done);
  },

  getLastDataSent: function() {
    return this.lastDataSent;
  },
}
