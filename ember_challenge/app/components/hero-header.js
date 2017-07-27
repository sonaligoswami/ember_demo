import Ember from 'ember';

export default Ember.Component.extend({
	isShowingModal: false,
	actions: {
		openModel: function() {
			this.set('isShowingModal',true);
		},
		closeModel:function(){
			this.set('isShowingModal',false);
		}
	}
});
