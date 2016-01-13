(function(){
	var Book = Backbone.Model.extend({
		'urlRoot': '/api/v1/books',
		'initialize': function(){
			Backbone.Events.trigger('custom-book-inited', 'I have already been initialized!');
		}
	});
	var newBook = new Book({
		'title': 'Adventures of Huckleberry Finn',
		'author': 'Mark Twain',
		'language': 'English'
	});
	newBook.set('publication_date', '1884-12-10');
	//  POST /books
	newBook.save(undefined, {'success': function(model, res){
		res = res || {};
		model.set('id', res.id);
		console.log(model);
		//  DEL /books
		model.destroy();
	}});
})();