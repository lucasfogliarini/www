import { Template } from 'meteor/templating';

import { Whats } from '/api/whats/';

Template.guessing.onCreated(function() {
  this.subscribe('guess');
});

Template.guessing.helpers({
  guess(){
     let a = Whats.guess().fetch();
     console.log(a);
  }
});
