exports.options = {

	'name': 'CodeWithAbhi',
	'brand': 'Keystone Test',

	'less': 'public',
	'static': 'public',
	'views': './views',
	'view engine': 'ejs',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'MI;SG$ueK[u^m=g+CQ]gAM.+w=)/ID',

};

exports.locals = {
	env: process.NODE_ENV,
	utils: require('keystone-utils'),
};

// exports.nav = {
// 	'people': ['users', 'companies', 'contacts'],
// 	'content': ['posts', 'post-categories', 'events', 'jobs', 'galleries', 'files'],
// 	'test-schemas': ['autocreates', 'field-tests', 'update-handler-tests', 'no-edits'],
// };