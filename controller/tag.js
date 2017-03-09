let Tag = require('../models/tag');

module.exports = {
	addOneItem: (item) => {
		return Tag.create(item).exec();
	},
	updateOneById: (id, data) => {
		return Tag.update({
			_id: id
		}, {
			$set: data
		}).exec()
	},
	getTagByname: (name) => {
		return Tag.findOne({
			name: name
		}).exec();
	},
	getAll: () => {
		return Tag.find({}).exec();
	},
	getOneByIndex: (_index) => {
		if (!isNaN(_index)) {
			_index = parseInt(_index);
		}
		return Tag.find({}).skip(_index).limit(1).exec();
	}
};