import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class CultureCollection extends BaseCollection {
}
export const Culture = new CultureCollection('culture');

//schema
Culture.schema = new SimpleSchema({
  culture: {
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

Culture.attachSchema(Culture.schema);
