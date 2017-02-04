import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function () {
//    $(".jquerypic").jquerypic();
    // this.$(".jquerypic").jquerypic();
     var jquerypic = this.$(".jquerypic").jquerypic();
     this.set('jquerypic', jquerypic);
  },

  willDestroyElement: function () {
  this.get('jquerypic').stop();
},

actions: {
  stopEvents: function () {
    this.get('jquerypic').stop();
  }
}


});
