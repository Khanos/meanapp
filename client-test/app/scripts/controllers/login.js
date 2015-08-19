'use strict';

/**
 * @ngdoc function
 * @name clientTestApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientTestApp
 */
/**
app.controller('LoginCtrl', ['$scope', 'Restangular', 'NewUser', 'loginService', function ($scope, Restangular, NewUser, loginService) {
    var User = Restangular.one('newuser');
    console.log(User.one('55ccff0ae0a59a99179e4f18').get(''));
    $scope.loginfunc = function(user){
    	console.log('entro en la funcion');
    	loginService.loginfunc(user); //Llamada al servicio loginService
    };
}])
**/
app.controller('LoginCtrl', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.loginfunc = function(newuser){
    	console.log('entro en la funcion');
    	loginService.loginfunc(newuser); //Llamada al servicio loginService
    };
}])
