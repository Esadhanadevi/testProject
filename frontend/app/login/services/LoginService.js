angular.module('loginService', [])
	.factory('LoginService', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			},
			find : function(user_info) {
				console.log("user_info service:",user_info);
				return $http.post('/api/users', user_info);
			}
		}
	}]);
	
