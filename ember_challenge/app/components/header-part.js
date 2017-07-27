import Ember from 'ember';

export default Ember.Component.extend({
	isShowingModal: false,
	isCollapseIn:false,
	actions: {
		openModel: function() {
			this.set('isShowingModal',true);
			Ember.$("#data-scroll-menu").toggleClass('in');
		},
		closeModel:function(){
			this.set('isShowingModal',false);
		},
		toggleCollapse:function(){
			Ember.$("#data-scroll-menu").toggleClass('in');
		},
		hideMenu:function(){
			Ember.$("#data-scroll-menu").removeClass('in');
		}
	}
});
