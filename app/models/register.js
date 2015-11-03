var mongoose = require('mongoose')

module.exports = mongoose.model('register',{
	fname : {type : String, default: ''},
	lname : {type : String, default: ''},
	username : {type : String, default: ''},
	password : {type : String, default: ''}
});
