angular.module("checkin", ["ngRoute"])
    .config(function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
			templateUrl: '../views/index.html',
			controller: 'HomeController'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    })