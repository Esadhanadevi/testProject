angular.module('loginController', [])
	.controller('LoginController', ['$scope','$http','LoginService', function($scope, $http, LoginService) {
		$scope.formData = {};
		$scope.findUser = function(){
			console.log("users info controller:",$scope.formData);
			LoginService.find($scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.message = "Login successfully!"
					console.log("message:",$scope.message);
				});
		};
	}]);
