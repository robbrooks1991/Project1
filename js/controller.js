//Home Page Controller

angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "THE HOME OF TECHNOW KNOW HOW";
        $scope.title2 = "Listen";
        $scope.title3 = "Whats-On?";
        $scope.title4 = "Sign-up/Login"

    })


//DJ List page controller.

    .controller('DJController', function($scope){
        $scope.title1 = "Nina Kraviz";
        $scope.title2 = "Andrew Weatherall";
        $scope.title3 = "Bicep";
        $scope.title4 = "Atish";
        $scope.title5 = "Damian Lazarus";
        $scope.title6 = "Dirty Doering";
        $scope.title7 = "Green Velvet";
        $scope.title8 = "Midland";
        $scope.title9 = "Maceo Plex";
        $scope.title10 = "Chemical Brothers";
        $scope.title11 = "Eric Prydz";
        $scope.title12 = "Jackmaster";
        $scope.title13 = "Adam Beyer";
        $scope.title14 = "Solomun";
        $scope.title15 = "Dixon";
        $scope.title16 = "Claptone";

        $scope.h5 = "Short Bio"
    });

