'use strict';

/**
 * @ngdoc overview
 * @name clientTestApp
 * @description
 * # clientTestApp
 *
 * Main module of the application.
 */
var app = angular.module('clientTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ]);

app.config(function ($routeProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/prueba', {
        templateUrl: 'views/prueba.html',
        controller: 'PruebaCtrl',
        controllerAs: 'prueba'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('NewUserRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  });

app.factory('NewUser', function(NewUserRestangular) {
    return NewUserRestangular.service('newuser');
  })