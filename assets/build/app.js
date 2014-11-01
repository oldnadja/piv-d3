'use strict';

/* App Module */

var pivApp = angular.module('pivApp', [
    'ngRoute',

    'pivControllers'
]);

pivApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index.html',
                controller: 'PivCtrl'
            });
    }]);