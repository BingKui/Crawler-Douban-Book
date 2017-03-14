let express = require('express');
let app = express();
let log4js = require('log4js');
var log = log4js.getLogger("app");


let tag = require('./router/tag');
let tagList = require('./router/tagList');
let books = require('./router/books');

log4js.configure('./config/log4js.json');
app.use(log4js.connectLogger(log4js.getLogger("http"), {
	level: 'auto',
	format: ':method :url'
}));

app.use('/tag', tag);

app.use('/tagList', tagList);

app.use('/books', books);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		log.error("Something went wrong:", err);
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	log.error("Something went wrong:", err);
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});



app.listen(3000);

log.info('server start at 3000!');