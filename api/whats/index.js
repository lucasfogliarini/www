import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class WhatsCollection extends BaseCollection {
}
export const Whats = new WhatsCollection('whats');

//schema
Whats.schema = new SimpleSchema({
  action_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  emotion_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  where_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  temperature: {
    type: Number//-1,0,1
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  }
});

Whats.attachSchema(Whats.schema);
