import { Template } from 'meteor/templating';

import { Whats } from '/api/whats/';

Template.guessing.helpers({
  guess(){
     return Whats.guess();
  }
});
