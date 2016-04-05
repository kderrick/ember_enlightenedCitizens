import config from '../config/environment';
import Ember from 'ember';
var key = config.myApiKey;


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey='+ key +'&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
  },
});
