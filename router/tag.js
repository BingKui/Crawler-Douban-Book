let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');
let log4js = require('log4js');
let logger = log4js.getLogger("tags");
let config = require('../config/config');
let TagModel = require('../controller/tag');

router.get('/', (req, res, next) => {
	logger.info('爬取地址: ' + config.crawlerUrl);
	request(config.crawlerUrl, (error, response, body) => {
		logger.info(response.statusCode);
		if (!error && response.statusCode == 200) {
			let $ = cheerio.load(body);
			let tag = $('#content .article .tag-view-type').next('div').find('div');
			let _result = [];
			for (let i = 0; i < tag.length; i++) {
				let _this = $(tag[i]);
				let _temp = _this.find('.tagCol').find('td');
				let _ca = _this.find('.tag-title-wrapper').attr('name');
				for (let j = 0; j < _temp.length; j++) {
					let _that = $(_temp[j]);
					let _url = encodeURI('https://book.douban.com' + _that.find('a').attr('href'));
					let _item = {
						category: _ca,
						name: _that.find('a').text().trim(),
						count: parseInt(_that.find('b').text().trim('').replace(/[\(-\)]/g, '')),
						url: _url
					};
					TagModel.addOneItem(_item);
					_result.push(_item);
				}
			}
			var result = {
				data: _result
			};
			// fs.writeFile('./test_data/tag.json', JSON.stringify(result), 'utf-8', (err) => {
			// 	if (err) throw err;
			// });
			res.json(result);
		} else {
			logger.error(error);
		}
	});
});


router.get('/update', (req, res, next) => {
	TagModel.getAll().then((docs) => {
		let _len = docs.length;
		for (let i = 0; i < _len; i++) {
			(() => {
				setTimeout(() => {
					//send
					request(docs[i].url, (error, response, body) => {
						logger.info(response.statusCode);
						if (!error && response.statusCode == 200) {
							let $ = cheerio.load(body);
							let _page = $('.paginator').find('a');
							let _max = parseInt($(_page[_page.length - 2]).text());
							logger.info(_max);
							if (_max > 50) {
								_max = 50;
							}
							TagModel.updateOneById(docs[i]._id, {
								page: _max
							});
						} else {
							logger.error(error);
						}
					});
				}, i * 3000);
			})(i)
		}
		res.send('update....');
	});
});

module.exports = router;