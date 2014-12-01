define([
    'app/controllers/AppController',
    'app/module'
], function (AppController, ModuleApp) {

    ModuleApp
        .controller('AppController', AppController)

    return ModuleApp;
});