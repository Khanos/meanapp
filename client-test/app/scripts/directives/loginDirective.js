'use strict';

app.directive('loginDirective', [function () {
	return {
		restrict: 'A',
		templateUrl: 'views/templates/login.tpl.html'
	};
}])