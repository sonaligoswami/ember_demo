import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
			ourServices:[
				{
					"name":"Unique Layouts",
					"img":"fa-lightbulb-o",
					"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Distinctio ut, inventore quibusdam consequatur eos."
				},
				{
					"name":"Responsive",
					"img":"fa-mobile",
					"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Distinctio ut, inventore quibusdam consequatur eos."
				},
				{
					"name":"Ajax Transitions",
					"img":"fa-spinner",
					"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Distinctio ut, inventore quibusdam consequatur eos."
				},
				{
					"name":"E-Commerce",
					"img":"fa-shopping-bag",
					"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Distinctio ut, inventore quibusdam consequatur eos."
				},
				{
					"name":"Unlimited Portfolios",
					"img":"fa-th",
					"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Distinctio ut, inventore quibusdam consequatur eos."
				},
				{
					"name":"Powerful",
					"img":"fa-bolt",
					"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Distinctio ut, inventore quibusdam consequatur eos."
				}
			],
			ourFocusedTeam:[
				{
					"name":"Riff Raff",
					"designation":"Founder",
					"img":"assets/img/riffraff.jpg",
					"description":"Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim.",
					"tw":"#",
					"fb":"#",
					"li":"#"
				},
				{
					"name":"2 Chainz",
					"designation":"Chief Technology Officer",
					"img":"assets/img/2chainz.jpeg",
					"description":"Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. ",
					"tw":"#",
					"fb":"#",
					"li":"#"
				},
				{
					"name":"Nene Leakes",
					"designation":"Director of Markerting",
					"img":"assets/img/nene.jpeg",
					"description":"Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim.",
					"tw":"#",
					"fb":"#",
					"li":"#"
				},
				{
					"name":"Miley Cirus",
					"designation":"Creative Director",
					"img":"assets/img/miley.jpg",
					"description":"Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim.",
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
