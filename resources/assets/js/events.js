runApp.class_method({
'test_events': function(){
	// Listening Models event after initialization in model.js
	Backbone.Events.once('custom-book-inited', function(msg){
		console.log('MSG:' + msg);
	});
	// Create custom objects extending of Events
	var myObject1 = _.extend({}, Backbone.Events);
	var myObject2 = _.extend({}, Backbone.Events);
	// Set listners
	myObject1.on('event1', function(){
		console.log('I am event1');
	});
	// Call only once
	myObject1.once('event2', function(){
		console.log('I am event2');
	});
	// myObject1 listen event3 from myObject2
	myObject1.listenTo(myObject2, 'event3', function(){
		console.log('I am event3');
	});
	// Publishing
	myObject1.trigger('event1');
	myObject1.trigger('event2');
	// false - only once
	myObject1.trigger('event2');
	myObject2.trigger('event3');
	// Stop listening and check
	(myObject1.stopListening(myObject2), myObject2.trigger('event3'));
	// Disable listening and check
	(myObject1.off(), myObject1.trigger('event1'));
}});