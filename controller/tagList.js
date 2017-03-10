let TagList = require('../models/tagList');

module.exports = {
	addOneItem: (item) => {
		return TagList.create(item).exec();
	},
	findOneByName: (name) => {
		return TagList.findOne({
			name: name
		}).exec();
	},
	updateOneById: (id, data) => {
		return TagList.update({
			_id: id
		}, {
			$set: data
		}).exec()
	},
	getTagByname: (name) => {
		return TagList.findOne({
			name: name
		}).exec();
	},
	getAll: () => {
		return TagList.find({}).exec();
	},
	getOneByIndex: (_index) => {
		if (!isNaN(_index)) {
			_index = parseInt(_index);
		}
		return TagList.find({}).skip(_index).limit(1).exec();
	}
};