import Ember from 'ember';
import DS from 'ember-data';
import Validator from 'npm:validator';

export default Ember.Component.extend({
	errors: DS.Errors.create(),
	isShowingThankModal: false,
	isShowContacForm:true,
	isShowThankMsg:false,
	actions:{
		submit:function(){
			if(this.validate()){
				this.set('isShowContacForm',false);
				this.set('isShowThankMsg',true);
			}
		}
	},
	validate: function(){
		this.set('errors',DS.Errors.create());
		if(Validator.isEmpty(String(this.get('name'))) || this.get('name')===undefined){
			this.get('errors').add('name',"Name can't be empty");
		}
		if(Validator.isEmpty(String(this.get('email')))|| this.get('email')===undefined){
			this.get('errors').add('email',"Email can't be empty");
		}
		if(!Validator.isEmail(String(this.get('email')))){
			this.get('errors').add('email',"Invalid email");
		}
		if(Validator.isEmpty(String(this.get('subject')))|| this.get('subject')===undefined){
			this.get('errors').add('subject',"Subject can't be empty");
		}
		if(Validator.isEmpty(String(this.get('message')))|| this.get('message')===undefined){
			this.get('errors').add('message',"Message can't dialogbe empty");
		}
		
		return this.get('errors.isEmpty');
	}
});
