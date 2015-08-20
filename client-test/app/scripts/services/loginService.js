'use strict'

app.factory('loginService', ['Restangular', function (Restangular) {
	//var apiRestNewUser = Restangular.all('newuser').getList();
	var apiRestNewUser = Restangular.one('newuser.email', 'Khanos@Khanos.com').get();

	return {
		loginfunc:function(newuser){
			console.log('Entro en el servicio login');
			console.log(newuser.username);
			console.log(newuser.mail);
			console.log(newuser.pass);
			console.log(apiRestNewUser);
		}	
	};
}]);
