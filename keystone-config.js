exports.options = {

	'name': 'CodeWithAbhi',
    'brand': 'Abhijit Blog',
    
    'cloudinary config': process.env.CLOUDINARY_URL,

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

exports.nav = {
	'people': ['users'],
	'content': ['posts', 'events'],
};