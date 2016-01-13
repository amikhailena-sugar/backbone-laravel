runApp.class_method({
// Simple test of Backbone View
'test_view': function(){
	var SomeView = Backbone.View.extend({
		'options': {
			'title': 'Test'
		},
		'initialize': function() {
			this.render();
		},
		'render': function() {
			var template = _.template("<button type=\"button\" class=\"btn btn-lg btn-default\"><%= title %></button>");
			this.$el.html(template(this.options));
		},
		'events': {
			'click .btn': 'runTest'
		},
		'runTest': function(){
			console.log('Test has been runned!');
		}
	});
	return new SomeView({'el': $('#container')});
} });