if (Meteor.isClient) {
  Template.teams.helpers({
    members: function(){
      return Members.find({});
    }
  });
}
