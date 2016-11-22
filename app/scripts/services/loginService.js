/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('reportAngularApp').
        factory('loginWSSerivce', ['$http', function($http){
            
            //var url = 'http://10.116.142.154:8081/RESTfulExample/rest/users/';
			var url = 'jsonFiles/loginInformation.json';
            var loginWSSerivce = {};
            loginWSSerivce.getInformation = function(userName) {
				console.log(userName);
                return $http.get(url);
            };
            return loginWSSerivce;
}]);
