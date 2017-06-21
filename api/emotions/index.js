import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';

//api
class EmotionsCollection extends BaseCollection {
  findBy(emotion){
    return super.findOne({ emotion: emotion });
  }
}
export const Emotions = new EmotionsCollection('emotions');

//schema
Emotions.schema = new SimpleSchema({
  emotion: {
    type: String,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  }
});

Emotions.attachSchema(Emotions.schema);
