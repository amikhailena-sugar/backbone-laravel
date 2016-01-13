runApp.class_method({
// All requests in this sample is a synchronous
'test_collection': (function(){
	var bTested=false, myLibrary;
	function runTest(){
		var Library = Backbone.Collection.extend({'url': '/api/v1/books'});
		// Create instance of Libriry
		var oLibrary = new Library();
		// GET  /books - view all books
		oLibrary.fetch({'async': false});
		console.log(oLibrary.toJSON());
		// POST  /books - create new book
		var newBook = oLibrary.create({
			'title': 'Tom Sawyer Abroad',
			'author': 'Twain',
			'language': 'English',
			'publication_date': '1894-01-01'
		}, {
			'async': false,
			'success': function(model, res){
				res = res || {};
				model.set('id', res.id);
			}
		});
		// PUT  /books/{id} - change our book
		newBook.save({'author': 'Mark Twain'}, {'async': false});
		// GET  /books/{id} - get information about new book
		newBook.fetch({'async': false, 'success': function(model){
			console.log(model.toJSON());
		}});
		// DEL  /books/{id} - delete our book
		newBook.destroy();
		return oLibrary;
	}
	return function(){
		// run test only once
		if(bTested)
			return myLibrary;
		myLibrary=runTest();
		bTested=true;
		return myLibrary;
	}
})() });