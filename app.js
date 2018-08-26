require('dotenv').load();

var compression = require('compression');
var express = require('express');
var keystone = require('keystone');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var config = require('./keystone-config');

var app = new express();

keystone.init(config.options);
keystone.import('models');
keystone.set('locals', config.locals);
keystone.set('routes', require('./routes'));
keystone.set('nav', config.nav);

keystone.initDatabaseConfig();
keystone.initExpressSession();

app.use(compression());
app.use('/keystone', keystone.Admin.Server.createStaticRouter(keystone));
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(keystone.get('session options').cookieParser);
app.use(keystone.expressSession);
app.use(keystone.session.persist);
app.use(require('connect-flash')());

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use('/keystone', keystone.Admin.Server.createDynamicRouter(keystone));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = process.env.NODE_ENV === 'development' ? err.message : 'Sorry, Seems like you landed on the wrong page.';
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

keystone.openDatabaseConnection(function () {
  var server = app.listen(process.env.PORT || 3001, function () {
    console.log('-------------------------------');
    console.log('Express server ready on port %d', server.address().port);
    console.log('-------------------------------');
  });
});