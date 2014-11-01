'use strict';

/* App Module */

var pivApp = angular.module('pivApp', [
    'ngRoute',
    'pivServices',
    'pivControllers'
]);

pivApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/piv', {
                templateUrl: 'assets/js/partials/index.html',
                controller: 'PivCtrl'
            }).
            otherwise({
                templateUrl: 'assets/js/partials/index.html',
                controller: 'PivCtrl'
            });
    }]);