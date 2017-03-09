var Mongolass = require('mongolass');
var mongolass = new Mongolass();
let logger = require('log4js').getLogger('MongoDB');
mongolass.connect('mongodb://localhost/splider').then(() => {
	logger.info('MongoDB connect success!');
}, () => {
	logger.error('MongoDB connect failed!');
});

module.exports = mongolass;