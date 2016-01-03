Meteor.publish('teams', function(){
  return Teams.find();
});
Meteor.publish('members', function(){
  return Members.find();
});
Meteor.publish('games', function(){
  return Games.find();
});
