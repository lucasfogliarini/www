import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
    seed_actions();
});

function seed_actions(){
  //conversando sobre
  var exists = Actions.findByAction('conversando sobre');
  if(!exists){
    Actions.insert({
      action: 'conversando sobre'
    });
  }

  //pensando sobre
  var exists = Actions.findByAction('pensando sobre');
  if(!exists){
    Actions.insert({
      action: 'pensando sobre'
    });
  }

  //atuando
  var exists = Actions.findByAction('atuando');
  if(!exists){
    Actions.insert({
      action: 'atuando'
    });
  }

  //assistindo
  var exists = Actions.findByAction('assistindo');
  if(!exists){
    Actions.insert({
      action: 'assistindo'
    });
  }

  //escutando
  var exists = Actions.findByAction('escutando');
  if(!exists){
    Actions.insert({
      action: 'escutando'
    });
  }

  //comendo
  var exists = Actions.findByAction('comendo');
  if(!exists){
    Actions.insert({
      action: 'comendo'
    });
  }

  //bebendo
  var exists = Actions.findByAction('bebendo');
  if(!exists){
    Actions.insert({
      action: 'bebendo'
    });
  }

  //jogando
  var exists = Actions.findByAction('jogando');
  if(!exists){
    Actions.insert({
      action: 'jogando'
    });
  }

  //usando
  var exists = Actions.findByAction('usando');
  if(!exists){
    Actions.insert({
      action: 'usando'
    });
  }

  //lendo
  var exists = Actions.findByAction('lendo');
  if(!exists){
    Actions.insert({
      action: 'lendo'
    });
  }

  //praticando
  var exists = Actions.findByAction('praticando');
  if(!exists){
    Actions.insert({
      action: 'praticando'
    });
  }
}
