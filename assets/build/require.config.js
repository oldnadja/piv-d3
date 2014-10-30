/*globals require*/
require.config({
    waitSeconds: 20,

    paths: {
        'angular': '../vendors/angular/angular',
        'angular-route': '../vendors/angular/angular-route',
        'angular-resource': '../vendors/angular/angular-resource',

        'bootstrap': '../vendors/bootstrap/bootstrap',

        'angular-strap': '../vendors/angular-strap/angular-strap',
        'angular-strap-tpl': '../vendors/angular-strap/angular-strap.tpl',

        'jquery': '../vendors/jquery/jquery',

        'underscore': '../vendors/underscore/underscore',
        'underscore-mixins': '../vendors/underscore/underscore-mixins',

        'config-angular': '../app/config/config-angular',
        'config-modules': '../app/config/config-modules',

        'module-app': '../app/modules/app/index'
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
        'angular-locale_ru-ru': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
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
        },
        'dialogs': {
            deps: ['angular']
        }
    }
});