import Ember from 'ember';

export default Ember.ObjectController.extend({
  selectedVendor: 'Fitbit',
  vendors: ['Fitbit', 'Jawbone Up'],

  selectedEndpoint: 'fitness.json',
  endpoints: ['fitness.json', 'routines.json']
});
