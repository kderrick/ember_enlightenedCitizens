import config from '../config/environment';
import Ember from 'ember';
var key = config.myApiKey;

export default Ember.Route.extend({
  model: function(params) {
    var chamber = params.chamber;
    var url = 'http://congress.api.sunlightfoundation.com/committees?per_page=all&chamber='+ chamber + '&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});



// if(committee.subcommittee === false) {
//   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
// }
