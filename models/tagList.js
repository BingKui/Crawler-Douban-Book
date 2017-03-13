let Mongolass = require('mongolass');
let mongolass = require('../lib/mongo');

let TagList = mongolass.model('taglist', {
	tag: {
		type: Mongolass.Types.ObjectId
	},
	pic: {
		type: 'string'
	},
	name: {
		type: 'string'
	},
	url: {
		type: 'string'
	},
	pub: {
		type: 'string'
	},
	star: {
		type: 'number'
	},
	desc: {
		type: 'string'
	}
});
TagList.index({
	name: 1
}, {
	unique: true
}).exec();

module.exports = TagList;