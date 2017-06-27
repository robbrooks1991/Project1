angular.module('techno', ['ngRoute', 'RouteControllers']);

angular.module('techno').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
        .when('/listofdjs', {
            templateUrl: 'templates/listofdjs.html',
            controller: 'DJController'
        })
    .when('/listen', {
            templateUrl: 'templates/listen.html',
            controller: 'ListenController'
        })
    .when('/gallery', {
            templateUrl: 'templates/gallery.html',
            controller: 'GalleryController'
        })
    .when('/account', {
            templateUrl: 'templates/account.html',
            controller: 'AccountController'
        })
});