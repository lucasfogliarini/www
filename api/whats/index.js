import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class WhatsCollection extends BaseCollection {
}
export const Whats = new WhatsCollection('whats');

//schema
Whats.schema = new SimpleSchema({
  username: {
    type: String,
  },
  restaurant_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  }
});

Whats.attachSchema(Whats.schema);
