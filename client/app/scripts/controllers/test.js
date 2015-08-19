'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the clientApp
 */

angular.module('clientApp')
	.directive('actorTile', function () {
		return {
				restrict: 'A',
				scope: {
					actor: '='
				},
				replace: true,
				templateUrl: '/views/actor-tile-template.html',
				link: function(scope,elem,attrs){
					scope.hi = function(){
						alert('Hola, mi nombre es ' + scope.actor.actor)
					}
				}
		};
	});

angular.module('clientApp')
  .controller('TestCtrl', function ($scope) {
    $scope.mutants = [
	    {
	    	name: 'Wolverine',
	    	actor: 'Hugh Jackman',
	    	image: 'http://www.cinemablend.com/images/news_img/21502/hugh_jackman_21502.jpg'
	    },
	    {
	    	name: 'Cyclops',
	    	actor: 'James Marsden',
	    	image: 'http://vignette2.wikia.nocookie.net/xmenmovies/images/d/d3/Cyclops_04.jpg/revision/latest?cb=20140330215941'
	    },
	    {
	    	name: 'Beast',
	    	actor: 'Nicholas Hoult',
	    	image: 'http://img2.wikia.nocookie.net/__cb20110918202014/marvelmovies/images/d/df/Beast-x-men.jpeg'
	    }
    ];
  });
