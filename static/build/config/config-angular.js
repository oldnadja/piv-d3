define([
    'angular',
    'config/configuration',
    'angular-route',
	'angular-resource',
	'underscore',
    'underscore-mixins'
], function (angular, configuration) {
    
	_.createEmptyModules(['piv.templates']);
    
	var standardAngularModules = [
            'ngRoute',
            'ngResource',
            // Application Modules
			'piv.templates',
			'piv'
        ],
        config = angular.module('config', []);

    configuration.standardAngularModules = standardAngularModules;

    config.constant('config', configuration);

    return configuration;
});