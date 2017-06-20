import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
  action() {
    BlazeLayout.render('main', { content: 'main_content' });
  },
});

FlowRouter.notFound = {
  action() {
    console.log('not found');
  },
};
