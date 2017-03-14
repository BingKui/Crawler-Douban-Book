let Book = require('../models/books');

module.exports = {
	addOneItem: (item) => {
		return Book.create(item).exec();
	},
	updateOneById: (id, data) => {
		return Book.update({
			_id: id
		}, {
			$set: data
		}).exec()
	},
	getTagByname: (name) => {
		return Book.findOne({
			name: name
		}).exec();
	},
	getAll: () => {
		return Book.find({}).exec();
	},
	getOneByIndex: (_index) => {
		if (!isNaN(_index)) {
			_index = parseInt(_index);
		}
		return Book.find({}).skip(_index).limit(1).exec();
	}
};