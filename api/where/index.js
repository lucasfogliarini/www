import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class WhereCollection extends BaseCollection {
  findBy(where){
    return super.findOne({ where: where });
  }
}
export const Where = new WhereCollection('where');

//schema
Where.schema = new SimpleSchema({
  where: {
    type: String,
  }
});

Where.attachSchema(Where.schema);
