var rgApp = angular.module('rgApp', ['ngRoute']);

    // configure our routes
    rgApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'components/home/home.html',
                controller  : 'homeController'
            })

            // RESIDENTS
            .when('/financials', {
                templateUrl : 'components/financials/financials.html'
            })
            .when('/boardofdirectors', {
                templateUrl : 'components/boardofdirectors/boardofdirectors.html'
            })

            // PURCHASERS
            .when('/purchaseprocess', {
                templateUrl : 'components/purchaseprocess/purchaseprocess.html',
                controller  : 'homeController'
            })
            .when('/unitsforsale', {
                templateUrl : 'components/unitsforsale/unitsforsale.html',
                controller  : 'homeController'
            })
            .otherwise({
		        templateUrl : 'components/home/home.html'
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