import Ember from 'ember';
import DS from 'ember-data';
import Validator from 'npm:validator';
var isAtleastOneSubmit=false;
export default Ember.Component.extend({
	errors: DS.Errors.create(),
	isShowingThankModal: false,
	isShowContacForm:true,
	isShowThankMsg:false,
	viewErrors:false,
	actions:{
		submit:function(){
			isAtleastOneSubmit=true;
			if(this.validate()){
				this.set('isShowThankMsg', true);
				this.set('isShowContacForm', false);
			}else{
				this.set('viewErrors', true);
			}
		},
		checkValidation:function(){
			if(isAtleastOneSubmit){
				if(this.validate()){
					this.set('isShowThankMsg', true);
				}else{
					this.set('viewErrors', true);
				}
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
			this.get('errors').add('message',"Message can't be empty");
		}
		
		return this.get('errors.isEmpty');
	}
});
