define([
    'piv/module',
    'piv/services/VectorService',
    'piv/controllers/pivController',
    'piv/controllers/graphController'
], function (ModulePiv, VectorService, pivController, graphController) {

    ModulePiv
        .factory('VectorService', VectorService)
        .controller('pivController', pivController)
        .controller('graphController', graphController);

});
