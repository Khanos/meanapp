'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.alert_message = true;
    $scope.toggle = function() {
        $scope.alert_message = !$scope.alert_message;
    }
  });
