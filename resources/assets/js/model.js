runApp.class_method({
// All requests in this sample is an asynchronous
'test_model': (function(){
	var bTested=false, myBook;
	function runTest(args){
		var Book = Backbone.Model.extend({
			'urlRoot': '/api/v1/books',
			'initialize': function(){
				Backbone.Events.trigger('custom-book-inited', 'I have been initialized!');
			}
		});
		// Create new Book
		var newBook = new Book({
			'title': 'Adventures of Huckleberry Finn',
			'author': 'Mark Twain',
			'language': 'English'
		});
		// Forgot about publication date
		newBook.set('publication_date', '1884-12-10');
		//  POST /books - create on server
		newBook.save(undefined, {'success': function(model, res){
			res = res || {};
			model.set('id', res.id);
			console.log(model);
			//  DEL /books/{id} - delete our book
			model.destroy();
		}});
		return newBook;
	}
	return function(){
		// run test only once
		if(bTested)
			return myBook;
		myBook=runTest();
		bTested=true;
		return myBook;
	}
})() });