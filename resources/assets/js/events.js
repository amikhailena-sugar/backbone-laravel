runApp.class_method({
'test_events': function(){
	// Listening Models event after initialization
	Backbone.Events.once('custom-book-inited', function(msg){
		console.log('MSG:' + msg);
	});
	var myObject1 = _.extend({}, Backbone.Events);
	var myObject2 = _.extend({}, Backbone.Events);
	// Set listners
	myObject1.on('event1', function(){
		console.log('I am event1');
	});
	myObject1.once('event2', function(){
		console.log('I am event2');
	});
	myObject1.listenTo(myObject2, 'event3', function(){
		console.log('I am event3');
	});
	// Publishing
	myObject1.trigger('event1');
	myObject1.trigger('event2');
	myObject1.trigger('event2');
	myObject2.trigger('event3');
	(myObject1.stopListening(myObject2), myObject2.trigger('event3'));
	(myObject1.off(), myObject1.trigger('event1'));
}});