var app = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/_home.html',
			controller: 'HomeController'
		})
		.state('curriculum', {
			url: '/curriculum',
			templateUrl: 'partials/_curriculum.html',
			controller: 'CurriculumController'
		})
		.state('editCurriculum', {
			url: '/editCurriculum',
			templateUrl: 'partials/_edit-curriculum.html',
			controller: 'EditCurriculumController'
		});
		
	$urlRouterProvider.otherwise('/home');
})

.controller('HomeController', function($scope) {
	$scope.browsers = [
		{nav: 'Chrome', eng: 'Blink'},
		{nav: 'Firefox', eng: 'Gecko'},
		{nav: 'Safari', eng: 'WebKit'},
		{nav: 'Opera', eng: 'Presto'},
		{nav: 'Internet Explorer', eng: 'Trident'}
	];
})

.controller('CurriculumController', function($scope, Curriculum) {
	$scope.curriculum = Curriculum;
})

.factory('Curriculum', function() {
	return this;
})

.controller('EditCurriculumController', function($scope, Curriculum) {
	$scope.populate = function() {
		$scope.curriculum = Curriculum;
	}

	$scope.update = function() {
		Curriculum = $scope.curriculum;
	}

	$scope.populate();
	
});