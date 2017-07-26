describe('ep_bubble_sync_status - API - data sent on message', function () {
  var apiUtils = ep_bubble_sync_status_test_helper.apiUtils;

  before(function(done) {
    helper.newPad(function() {
      apiUtils.startListeningToApiEvents();
      done();
    });

    this.timeout(10000);
  });

  it('sends the "saving" status', function(done) {
    // change pad...
    helper.padInner$('div').first().sendkeys('a');

    // ... and wait for a "saving" status do be sent
    apiUtils.waitForDataToBeSent(function() {
      var status = apiUtils.getLastDataSent();
      expect(status).to.be('saving');
      done();
    });
  });

  it('sends the "saved" status after a while', function(done) {
    // "saved" might take a few ms to be sent
    helper.waitFor(function() {
      var status = apiUtils.getLastDataSent();
      return status === 'saved';
    }, 2000).done(done);
  });
});
