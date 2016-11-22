'use strict';

/**
 * @ngdoc overview
 * @name reportAngularApp
 * @description
 * # reportAngularApp
 *
 * Main module of the application.
 */
angular
  .module('reportAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

        /** Routes **/
         $stateProvider
                .state('login', {
                        url: '/',
                        templateUrl: 'views/reportLogin.html',
                        controller: 'loginController'
                  })
                .state('main', {
                        url: '/main',
                        templateUrl: 'views/reportMain.html'
                });
                
        $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get('$state');
                $state.go('login');
        });
  });

