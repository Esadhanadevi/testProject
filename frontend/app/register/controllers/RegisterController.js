angular.module('registerController', [])
	.controller('RegisterController', ['$scope','$http','RegisterService', function($scope, $http, RegisterService) {
		$scope.formData = {};
		$scope.saveUser = function(){
			console.log("users info controller:",$scope.formData);
			RegisterService.create($scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.message = "Registered successfully!"
				});
		};

		RegisterService.get()
			.success(function(data) {
				$scope.user_list = data;
			});
	}]);
