'use strict'

app.factory('loginService', ['Restangular', 'NewUser', function (Restangular, NewUser) {
	//var apiRestNewUser = Restangular.all('newuser').getList();
	var apiRestNewUser = Restangular.one('newuser?username=Khanos').get();

	return {
		loginfunc:function(newuser){
			console.log('Entro en el servicio login');
			console.log(newuser.username);
			//console.log(apiRestNewUser);
			var busqueda = Restangular.one('newuser?username='+newuser.username).get();
			//NewUser.post(newuser);
			console.log(busqueda);
		}	
	};
}]);
