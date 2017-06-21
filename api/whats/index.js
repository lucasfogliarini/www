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
     let emotion = this.guess_emotion();
     let where = this.guess_where();
     let temperature = this.guess_temperature();
     let who = this.guess_who();
   }
   guess_what(){
     //

     let actions = Actions.find();.map(function(e) { return e.action; } );
     let action = this.random(actions);

     let whatList = What.find({action_id: action._id }).map(function(e) { return e.what; } );
     let what = this.random(whatList);

   }
   guess_emotion(){
     //

      let emotions = Emotions.find().map(function(e) { return e.emotion; } );
      return this.random(emotions);
   }
   guess_where(){
     //

      let where = Emotions.find().map(function(e) { return e.where; } );
      return this.random(where);
   }
   guess_temperature(){
     return this.random(["morno","quente","frio"]);
   }
   guess_who(){
     let who = Emotions.find().map(function(e) { return e.name; } );
     return this.random(who);
   }
   random(array){
      return array[Math.floor(Math.random() * array.length)];
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
