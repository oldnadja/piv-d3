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
			console.log('$state');
			console.log( $state);
            $rootScope.$stateParams = $stateParams;

        }
    ]);
		

    return app;
});
