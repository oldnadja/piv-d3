define([
    'angular',
    'angular-ui-router'
], function (angular) {

    'use strict';

    var ModulePiv = angular.module('piv', [    
	        'ui.router'
	]);

	ModulePiv.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('index', {
                    controller: 'PivController',
                    url: '/piv',
                    title: 'PIV',
                    templateUrl: 'static/js/modules/piv/partials/index.html'
                });
        }
    ]);

    return ModulePiv;
});