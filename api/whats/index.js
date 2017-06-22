import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { BaseCollection } from '../base.js';
import { Actions } from '/api/actions/';
import { What } from '/api/what/';
import { Emotions } from '/api/emotions/';
import { Where } from '/api/where/';
import { Who } from '/api/who/';

//api
class WhatsCollection extends BaseCollection {
   guess(){
     let what = this.guess_what();
     return what;
     let emotion = this.guess_emotion();
     let where = this.guess_where();
     let temperature = this.guess_temperature();
     let who = this.guess_who();
     return what + " " + emotion + " " + where + " " + temperature + " " + who;
   }
   guess_what(){
     //
     let max = Actions.find().count();
     let random = this.random(max);
     let action = Actions.find({}, { skip: 1});
     return action;
    //  let what = What.findOne({ action_id: action._id });
    //  return action.action + " " + what.what;
   }
   guess_emotion(){
     //

     let max = Emotions.find().count();
     let random = this.random(max);
     return Emotions.find({}, { skip: random, limit: 1 }).emotion;
   }
   guess_where(){
     //

     let max = Where.find().count();
     let random = this.random(max);
     return Where.find({}, { skip: random, limit: 1 }).where;
   }
   guess_temperature(){
     let random = this.random(3);
     return ["morno","quente","frio"][random];
   }
   guess_who(){
     let max = Who.find().count();
     let random = this.random(max);
     return Who.find({}, { skip: random, limit: 1 }).who;
   }
   random(max){
      return Math.floor(Math.random() * max) + 0;
   }
}
export const Whats = new WhatsCollection('whats');

//schema
Whats.schema = new SimpleSchema({
  what_id: {
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
  when: {
    type: Date,
    denyUpdate: true,
  }
});

Whats.attachSchema(Whats.schema);
