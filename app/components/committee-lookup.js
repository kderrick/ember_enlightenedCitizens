import Ember from 'ember';

export default Ember.Component.extend({
  showCommitteeButtons: false,
  actions: {
    showCommitteeButtons() {
      this.toggleProperty('showCommitteeButtons');
    },
    lookupHouseCommittees() {
      this.sendAction('lookupHouseCommittees');
    }
  }
});
