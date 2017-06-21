import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class WhoCollection extends BaseCollection {
  findBy(name){
    return super.findOne({ name: name });
  }
}
export const Who = new WhoCollection('who');

//schema
Who.schema = new SimpleSchema({
  name: {
    type: String,
  }
});

Who.attachSchema(Who.schema);
