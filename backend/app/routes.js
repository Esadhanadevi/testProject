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

	//find registered user data
	app.get('/api/users', function(req, res){
		User.find({
			username : req.body.username,
			password : req.body.password,
			done : false
		},function(err, users){
			console.log("find users login:",users);
			if(err)
				res.send(err)
			res.json(users);
		});
	});

	//save user data
	app.post('/api/users', function(req, res){

		//remove all data
  		/*User.remove({}, function (err) {
		  if (err) return handleError(err);
		  // removed!
		});*/
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
		res.sendfile('./frontend/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
