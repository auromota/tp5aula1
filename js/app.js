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

.controller('CurriculumController', function($scope) {
	$scope.show = function() {
		if(!$scope.email) alert('Preencha o e-mail.')
		else if (!$scope.text) alert('Preencha a mensagem.')
		else {
			alert('Mensagem enviada!\n\n' + $scope.text);
			$scope.text = '';
			$scope.email = '';
		}
	}
});