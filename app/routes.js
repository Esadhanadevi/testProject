var User = require('./models/register')

module.exports = function(app){
	//get all user data
	app.get('/api/users', function(req, res){
		User.find(function(err, users){
			if(err)
				res.send(err)
			res.json(users);
		});
	});

	//save user data
	app.post('/api/users', function(req, res){
		console.log("****************************");
		console.log(req.body);
  		console.log("****************************");

		User.create({
			fname : req.body.fname,
			lname : req.body.lname,
			username : req.body.username,
			password : req.body.password,
			done : false
		},function(err, users){
			console.log("routes:",users);
			if(err)
				res.send(err)
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
