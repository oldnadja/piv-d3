/* ========================================================================
 * Positive Technologies
 * Module - Application
 * http://www.ptsecurity.com/
 * ========================================================================
 * Copyright 2014
 * Licensed under
 * ======================================================================== */

 /*globals define*/
define([
    'angular',
    'config-angular'
], function (angular, configAngular) {

    'use strict';

    /**
     * @name app
     * @description This is main Application Module
     */
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

    app.config([
        '$httpProvider',
        function ($httpProvider) {

            $httpProvider.interceptors.push('HttpInterceptorFactory');

        }
    ]);

    window.config = window.config || {};

    if (window.config.apiConfig === undefined) {
        window.config.apiConfig = {};

        var origin;

        if (window.location.origin) {
            origin = window.location.origin;
        } else {
            origin = 'http://' + window.location.host;
        }
        window.config.apiConfig.origin = origin;
    }

    window.config.defaultLocation = '/';


    return app;
});