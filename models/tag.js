let mongolass = require('../lib/mongo');

let Tag = mongolass.model('tag', {
	category: {
		type: 'string'
	},
	name: {
		type: 'string'
	},
	count: {
		type: 'number'
	},
	url: {
		type: 'string'
	},
	page: {
		type: 'number'
	}
});
Tag.index({
	name: 1
}, {
	unique: true
}).exec();

module.exports = Tag;