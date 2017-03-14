let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');
let log4js = require('log4js');
let logger = log4js.getLogger("books");

let TagListModel = require('../controller/tagList');
let BooksModel = require('../controller/books');

router.get('/', (req, res, next) => {
	TagListModel.getAll().then((docs) => {
		let _len = docs.length;
		logger.info('Count===>' + _len);
		for (let index = 0; index < _len; index++) {
			(() => {
				setTimeout(() => {
					request(docs[index].url, (error, response, body) => {
						logger.info('statusCode===>' + response.statusCode);
						if (!error && response.statusCode == 200) {
							let $ = cheerio.load(body);
							let _info = $('#info').html().split('<br>');
							let _name = $('#wrapper').find('h1').text().trim();
							logger.info('BookName: ' + _name);
							//logger.info($('#link-report').find('.intro').text());
							var _desc = $('#link-report').find('.intro').find('p');
							let de = [];
							for (let i = 0; i < _desc.length; i++) {
								de.push($(_desc[i]).text().trim())
							}
							let _item = {
								name: _name,
								pic: $('#mainpic').find('.nbg').attr('href'),
								star: parseFloat($('#interest_sectl').find('.rating_num').text().trim()),
								desc: de,
								author: '',
								press: '',
								name_original: '',
								translator: '',
								publication_date: '',
								pagination: 0,
								binding: '',
								price: '',
								series: '',
								isbn: ''
							};
							for (let i = 0; i < _info.length; i++) {
								let _itemInfo = $(_info[i]).text().replace(/\s/g, '');
								let _detail = _itemInfo.split(':');
								_item = addInfo(_detail[0], _detail[1], _item);
							}
							//deal number
							_item.pagination = parseInt(_item.pagination);
							_item.price = parseFloat(_item.price.substring(0, _item.price.length - 1));
							//logger.info(_item);
							BooksModel.addOneItem(_item);
						} else {
							logger.error(error);
						}
					});
				}, index * 3000);
			})(index)
		}
	});
	res.send('getting....');

});

function addInfo(key, val, obj) {
	let book_key = ['作者', '出版社', '原作名', '译者', '出版年', '页数', '装帧', '定价', '丛书', 'ISBN'];
	let book_key_name = ['author', 'press', 'name_original', 'translator', 'publication_date', 'pagination', 'binding', 'price', 'series', 'isbn'];
	for (let j = 0; j < book_key.length; j++) {
		if (key === book_key[j]) {
			obj[book_key_name[j]] = val;
		}
	}
	return obj;
}

module.exports = router;