(function(){
	var Library = Backbone.Collection.extend({'url': '/api/v1/books'});
	// Create instance of Libriry
	var oLibrary = new Library();
	// GET  /books
	oLibrary.fetch({'async': false});
	console.log(oLibrary.toJSON());
	// POST  /books
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
	// PUT  /books/{id}
	newBook.save({'author': 'Mark Twain'}, {'async': false});
	// GET  /books/{id}
	newBook.fetch({'async': false, 'success': function(model){
		console.log(model.toJSON());
	}});
	// DEL  /books/{id}
	newBook.destroy();
})();