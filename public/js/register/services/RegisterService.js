angular.module('registerService', [])
	.factory('RegisterService', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			},
			create : function(user_info) {
				console.log("user_info service:",user_info);
				return $http.post('/api/users', user_info);
			}
		}
	}]);
	
