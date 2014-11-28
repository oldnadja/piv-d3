/*globals require*/
require.config({
    waitSeconds: 20,

    paths: {
        'angular': '../vendors/angular/angular',
        'angular-route': '../vendors/angular/angular-route',
		'angular-ui-router': '../vendors/angular-ui/angular-ui-router',
        'angular-resource': '../vendors/angular/angular-resource',

		'clazz': '../vendors/utils/class',
        'bootstrap': '../vendors/bootstrap/bootstrap',

        'angular-strap': '../vendors/angular-strap/angular-strap',

        'jquery': '../vendors/jquery/jquery',
        'underscore': '../vendors/underscore/underscore',
        'd3' :'../vendors/d3/d3.v3.min',
        'filereadDirective': '../modules/piv/directives/FileReadDirective',
		'config-angular': '../modules/config-angular',
		'config-modules': '../modules/config-modules',
		'module-app': '../modules/app/index',
		'module-piv': '../modules/piv/index'
    },

    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
		
        'clazz': {
            exports: 'Class'
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-strap-tpl': {
            deps: ['angular-strap']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery-ui-custom': {
            deps: ['jquery']
        }
    }
});