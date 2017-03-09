let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');
let log4js = require('log4js');
let logger = log4js.getLogger("app");
let config = require('../config/config');

let TagModel = require('../controller/tag');

router.get('/', (req, res, next) => {
	TagModel.getOneByIndex(9).then((doc) => {
		res.json(doc);
	});
	TagModel.getAll().then((docs) => {
		let _len = docs.length;
		for (let i = 0; i < _len; i++) {
			setTimeout(() => {
				//send

			}, 600000);
		}
	});

	// for (let index = 0; index < 50; index++) {
	// 	var _startIndex = 20 * index;
	// 	let _tempUrl = encodeURI(_url) + '?start=' + _startIndex + '&type=T';
	// 	//增加时间间隔，防止被封IP
	// 	setTimeout(() => {
	// 		// request(_tempUrl, (error, response, body) => {
	// 		// 	//console.log(response.statusCode);
	// 		// 	if (!error && response.statusCode == 200) {
	// 		// 		let $ = cheerio.load(body);
	// 				let tag = $('#content').find('h1').text().split(':')[1];
	// 		// 		let _list = $('#subject_list .subject-list .subject-item');
	// 		// 		let _result = [];
	// 		// 		for (let i = 0; i < _list.length; i++) {
	// 		// 			let _this = $(_list[i]);
	// 		// 			let _item = {
	// 		// 				pic: _this.find('.pic').find('a img').attr('src'),
	// 		// 				name: _this.find('.info').find('h2 a').attr('title'),
	// 		// 				url: _this.find('.info').find('h2 a').attr('href'),
	// 		// 				desc: _this.find('.info').find('p').text().trim().replace(/[\n]/ig, '')
	// 		// 			};
	// 		// 			//获取详情
	// 		// 			_result.push(_item);
	// 		// 		}
	// 		// 		//先保存起来，后续这段代码删除，数据存入数据库
	// 		// 		fs.writeFile('./com_data/tagList/tagList_' + _name + '_page_' + (index + 1) + '.json', JSON.stringify(_result), 'utf-8', (err) => {
	// 		// 			if (err) throw err;
	// 		// 			console.log(_name + ' success...' + (index + 1))
	// 		// 		});
	// 		// 	}
	// 		// });
	// 	}, 500);

	// }
});

function getDataOneByOne(_arr) {

}

module.exports = router;