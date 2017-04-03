angular.module('techno', ['ngRoute', 'RouteControllers']);

angular.module('techno').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5mode([true]);

    $routeProvider
        .when("/", {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })

    .when("/account", {
        templateUrl: 'templates/account.html'
    })

    .when("/gallery", {
        templateUrl: 'templates/gallery.html'
    })

    .when("/listen", {
        templateUrl: 'templates/listen.html'
    })

    .otherwise({ //if a random website is entered it will return to the homepage.
        redirectTo: '/'
    });

});