define([
    'angular',
    'config-angular',
    'angular-ui-router'
], function (angular, configAngular) {

    'use strict';

    var app = angular.module('app', configAngular.standardAngularModules);

    app.run([
        '$rootScope',
        '$state',
        '$stateParams',
        function ($rootScope, $state, $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

        }
    ]);
		

    return app;
});
