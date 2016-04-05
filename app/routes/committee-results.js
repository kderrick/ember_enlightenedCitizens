import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var chamber = params.chamber;
    var url = 'http://congress.api.sunlightfoundation.com/committees?per_page=all&chamber='+ chamber + '&apikey=64258e8ddf2240809fd1cd35b593dd11';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }

});
