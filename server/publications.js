import { Whats } from '/api/whats/';
Meteor.publish('guess', function() {
  return Whats.guess();
});
