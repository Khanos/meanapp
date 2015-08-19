'use strict'

app.factory('loginService', [function () {
	return {
		loginfunc:function(newuser){
			console.log('Entro en el servicio login');
			console.log(newuser.mail);
		}
	};
}]);
