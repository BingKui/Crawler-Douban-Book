let mongolass = require('../lib/mongo');

let TagList = mongolass.model('taglist', {
	pic: {
		type: 'string'
	},
	name: {
		type: 'string'
	},
	url: {
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