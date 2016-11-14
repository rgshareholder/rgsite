var rgApp = angular.module('rgApp', ['ngRoute']);

    // configure our routes
    rgApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'components/home/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'components/home/home.html',
                controller  : 'homeController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'components/home/home.html',
                controller  : 'homeController'
            });
    });

    // create the controller and inject Angular's $scope
    rgApp.controller('homeController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    rgApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    rgApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });