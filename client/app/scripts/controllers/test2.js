'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Test2Ctrl
 * @description
 * # Test2Ctrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
  .controller('Test2Ctrl', function ($scope) {
	  $scope.alerts = [
	  ];

	  $scope.addAlert = function(alertType, alertMsg) {
	    $scope.alerts.push({type: alertType, msg: alertMsg});
	  };

	  $scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
  });
