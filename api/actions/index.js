import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class ActionsCollection extends BaseCollection {
  findBy(action){
    return super.findOne({ action: action });
  }
}
export const Actions = new ActionsCollection('actions');

//schema
Actions.schema = new SimpleSchema({
  action: {
    type: String,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  }
});

Actions.attachSchema(Actions.schema);
