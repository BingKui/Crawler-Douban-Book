// const config = require('../config/config');
// const env = process.env.NODE_ENV || "development"
// const log4js = require('log4js');

// // log4js.configure({
// // 	appenders: [{
// // 		type: 'console'
// // 	}, {
// // 		type: 'file',
// // 		filename: 'logs/cheese.log',
// // 		category: 'cheese'
// // 	}]
// // });


// log4js.configure({
// 	appenders: [{
// 			type: 'console',
// 			category: "console"
// 		}, //控制台输出
// 		{
// 			type: "dateFile",
// 			filename: 'logs/log.log',
// 			pattern: "_yyyy-MM-dd",
// 			alwaysIncludePattern: false,
// 			category: 'dateFileLog'
// 		} //日期文件格式
// 	],
// 	replaceConsole: true, //替换console.log
// 	levels: {
// 		dateFileLog: 'INFO'
// 	}
// });

// let logger = log4js.getLogger('dateFileLog');
// logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR')

// module.exports = logger;