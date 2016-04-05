import Ember from 'ember';

export function subcommittee(params/*, hash*/) {
  var subcommittee = params[0].subcommittee;
  console.log(subcommittee);
  if(subcommittee === true) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(subcommittee);
