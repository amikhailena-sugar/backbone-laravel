(function(){
	var AppRoutes = Backbone.Router.extend({
		'routes': {
			'test': 'testRoute',
			'test/:param': 'testRoute'
		},
		'testRoute': function(param){
			(param === null?console.log('Routing without parameters'):console.log('Routing with parameter - ' + param));
		}
	});
	var myAppRouter = new AppRoutes();
	Backbone.history.start();
})();