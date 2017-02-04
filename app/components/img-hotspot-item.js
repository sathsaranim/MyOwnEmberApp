import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,

    didInsertElement: function () {

        // var imageHotpotResize = this.$('img[usemap]').rwdImageMaps();
        // this.set('imageHotpotResize', imageHotpotResize);
        // this.$('img').mapster( { 
        //     fillColor: 'ff0000', 
        //     stroke: true, 
        //     singleSelect: true
        // });
    },

    willDestroyElement: function () {
        this.get('imageHotpotResize').stop();
    },
    actions: {
        toggleimageSize() {
            this.toggleProperty("isWide");

            if(!this.get('imageHotpotResize')){
                var imageHotpotResize = this.$('img[usemap]').rwdImageMaps();
                this.set('imageHotpotResize', imageHotpotResize);
            }
        }

    }
});
