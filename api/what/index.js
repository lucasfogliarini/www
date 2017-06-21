import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class WhatCollection extends BaseCollection {
}
export const What = new WhatCollection('what');

//schema
What.schema = new SimpleSchema({
  what: {
    type: String,
  },
  action_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  }
});

What.attachSchema(What.schema);
