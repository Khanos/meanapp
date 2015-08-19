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
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
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
