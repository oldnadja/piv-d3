'use strict';

/* App Module */

var pivApp = angular.module('pivApp', [
    'ngRoute',
    'pivServices',
    'pivControllers',
    'pivDirectives'
]);

pivApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/piv', {
                templateUrl: 'static/js/partials/index.html',
                controller: 'PivCtrl'
            }).
            otherwise({
                templateUrl: 'static/js/partials/index.html',
                controller: 'PivCtrl'
            });
    }]);