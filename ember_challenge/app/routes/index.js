import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
			ourServices:[
				{
					"name":"Unique Layouts",
					"img":"fa-lightbulb-o",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Responsive",
					"img":"fa-mobile",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Ajax Transitions",
					"img":"fa-spinner",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"E-Commerce",
					"img":"fa-shopping-bag",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Unlimited Portfolios",
					"img":"fa-th",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Powerful",
					"img":"fa-bolt",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}
			],
			ourFocusedTeam:[
				{
					"name":"Riff Raff",
					"designation":"Founder",
					"img":"assets/img/riffraff.jpg",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"tw":"#",
					"fb":"#",
					"li":"#"
				},
				{
					"name":"2 Chainz",
					"designation":"Chief Technology Officer",
					"img":"assets/img/2chainz.jpeg",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
					"tw":"#",
					"fb":"#",
					"li":"#"
				},
				{
					"name":"Nene Leakes",
					"designation":"Director of Markerting",
					"img":"assets/img/nene.jpeg",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"tw":"#",
					"fb":"#",
					"li":"#"
				},
				{
					"name":"Miley Cirus",
					"designation":"Creative Director",
					"img":"assets/img/miley.jpg",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"tw":"#",
					"fb":"#",
					"li":"#"
				}
			],
			ourSatisfiedClients:[
				{
					"img":"assets/img/logo-nike.svg",
				},
				{
					"img":"assets/img/logo-ms.svg",
				},
				{
					"img":"assets/img/logo-github.svg",
				}
			],
			ourPackages:[
				{
					"name":"FREE",
					"price":10,
					"description":'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
				},
				{
					"name":"STANDARD",
					"price":20,
					"description":'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
				},
				{
					"name":"PLATINUM",
					"price":30,
					"description":'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
				}
			]
		});
	}
});
