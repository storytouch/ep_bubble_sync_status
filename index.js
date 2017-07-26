var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuLeft = function (hook_name, context, cb) {
  context.content += eejs.require('ep_bubble_sync_status/templates/sync_status_holder.ejs');
  cb();
};
