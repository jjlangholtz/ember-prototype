import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PrototypeENV.locationType
});

Router.map(function() {
  this.resource('diffs');
});

export default Router;
