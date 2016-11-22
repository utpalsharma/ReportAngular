/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('reportAngularApp').
        controller('loginController',['$scope','loginWSSerivce', '$state', function($scope, loginWSSerivce, $state){
          
            $scope.userInfo = [];
            $scope.loginSubmit = function(){
                loginWSSerivce.getInformation($scope.userName).then(function(response){
                    var myData = response.data;
                    if(null !== myData && myData.isPresent === 'Yes'){
                        if(myData.isActive === 'Yes'){
                            if(myData.isAdmin === 'Yes') {
                               console.log('Admin Login');
                               $state.go('main');
                            } else {
                                 $state.go('main');
                            }
                        } else {
                              $state.go('main');
                        }
                     } else {
                         $state.go('main');
                    }
                }).catch(function(errorResponse) {
                    console.log('Error While Getting Service Response', errorResponse);
                });
            };
}]);
            

