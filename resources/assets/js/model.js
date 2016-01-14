runApp.class_method({
// All requests in this sample is an asynchronous
'test_model': (function(){
	var bTested=false, myBook;
	function runTest(args){
		var Book = Backbone.Model.extend({
			'urlRoot': '/api/v1/books',
			'initialize': function(){
				Backbone.Events.trigger('custom-book-inited', 'I have been initialized!');
			},
			'validate': function(attrs, options){
				var mainOptions=['title', 'author', 'language', 'publication_date'];
				for(var i=0; i< mainOptions.length; i++)
					if(!(attrs.hasOwnProperty(mainOptions[i]) && !!attrs[mainOptions[i]]))
						return mainOptions[i]+' is undefined';
			}
		});
		// Create new Book
		var newBook = new Book({
			'title': 'Adventures of Huckleberry Finn',
			'author': 'Mark Twain',
			'language': 'English'
		});
		// If the book is invalid - print a message
		newBook.on('invalid', function(model, error){
			console.log('Book is invalid: ' + error);
		});
		// Try to save
		newBook.save();
		// Forgot about publication date
		newBook.set('publication_date', '1884-12-10');
		//  POST /books - create on server
		newBook.save(undefined, {'success': function(model, res){
			res = res || {};
			model.set('id', res.id);
			console.log(model.toJSON());
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