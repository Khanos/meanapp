'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NewuserCtrl
 * @description
 * # NewuserCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NewuserCtrl', function (
  	$scope,
  	NewUser,
  	$location
  ){
    $scope.newuser = {};
    $scope.saveNewUser = function(){
    	NewUser.post($scope.newuser).then(function(){
    		$location.path('#/');
    	});
    };
  });