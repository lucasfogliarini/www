import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
    seed_actions();
});

function seed_actions(){
  //conversando sobre
  var exists = Actions.findBy('conversando sobre');
  if(!exists){
    Actions.insert({
      action: 'conversando sobre'
    });
  }

  //pensando sobre
  var exists = Actions.findBy('pensando sobre');
  if(!exists){
    Actions.insert({
      action: 'pensando sobre'
    });
  }

  //atuando
  var exists = Actions.findBy('atuando');
  if(!exists){
    Actions.insert({
      action: 'atuando'
    });
  }

  //assistindo
  var exists = Actions.findBy('assistindo');
  if(!exists){
    Actions.insert({
      action: 'assistindo'
    });
  }

  //escutando
  var exists = Actions.findBy('escutando');
  if(!exists){
    Actions.insert({
      action: 'escutando'
    });
  }

  //comendo
  var exists = Actions.findBy('comendo');
  if(!exists){
    Actions.insert({
      action: 'comendo'
    });
  }

  //bebendo
  var exists = Actions.findBy('bebendo');
  if(!exists){
    Actions.insert({
      action: 'bebendo'
    });
  }

  //jogando
  var exists = Actions.findBy('jogando');
  if(!exists){
    Actions.insert({
      action: 'jogando'
    });
  }

  //usando
  var exists = Actions.findBy('usando');
  if(!exists){
    Actions.insert({
      action: 'usando'
    });
  }

  //lendo
  var exists = Actions.findBy('lendo');
  if(!exists){
    Actions.insert({
      action: 'lendo'
    });
  }

  //praticando
  var exists = Actions.findBy('praticando');
  if(!exists){
    Actions.insert({
      action: 'praticando'
    });
  }
}

function seed_emotions(){
  //amando
  var exists = Emotions.findBy('amando');
  if(!exists){
    Emotions.insert({
      emotion: 'amando'
    });
  }
  //irritado
  var exists = Emotions.findBy('irritado');
  if(!exists){
    Emotions.insert({
      emotion: 'irritado'
    });
  }
  //chorando
  var exists = Emotions.findBy('chorando');
  if(!exists){
    Emotions.insert({
      emotion: 'chorando'
    });
  }
  //rindo
  var exists = Emotions.findBy('rindo');
  if(!exists){
    Emotions.insert({
      emotion: 'rindo'
    });
  }
  //chorando
  var exists = Emotions.findBy('chorando');
  if(!exists){
    Emotions.insert({
      emotion: 'chorando'
    });
  }
}
