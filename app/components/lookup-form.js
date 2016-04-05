import Ember from 'ember';

export default Ember.Component.extend({
  showLookupForm: false,

  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    showLookupForm() {
      this.toggleProperty('showLookupForm');
    }
  }
});
