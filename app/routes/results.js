import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=64258e8ddf2240809fd1cd35b593dd11&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
  },
});
// 'http://congress.api.sunlightfoundation.com/committees/locate?apikey=64258e8ddf2240809fd1cd35b593dd11'
