angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html'
		});

		$routeProvider.when('/hospedagems', {
			templateUrl: 'partials/principal.html',
			controller: 'HospedagemsController'
		});

		$routeProvider.when('/hospedagems/cadastro', {
			templateUrl: 'partials/hospedagem.html',
			controller: 'HospedagemController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.otherwise({redirectTo: '/hospedagems'});

	});