let Mongolass = require('mongolass');
let mongolass = require('../lib/mongo');

let Books = mongolass.model('book', {
	name: {
		type: 'string'
	},
	name_original: {
		type: 'string'
	},
	author: {
		type: 'string'
	},
	translator: {
		type: 'string'
	},
	press: {
		type: 'string'
	},
	publication_date: {
		type: 'string'
	},
	pagination: {
		type: 'number'
	},
	price: {
		type: 'number'
	},
	binding: {
		type: 'string'
	},
	isbn: {
		type: 'string'
	},
	series: {
		type: 'string'
	},
	star: {
		type: 'number'
	},
	pic: {
		type: 'string'
	},
	desc: [{
		type: 'string'
	}]
});
Books.index({
	name: 1
}, {
	unique: true
}).exec();
Books.index({
	isbn: 1
}, {
	unique: true
}).exec();
Books.index({
	name_original: 1
}).exec();

module.exports = Books;