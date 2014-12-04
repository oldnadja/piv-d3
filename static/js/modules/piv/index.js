define([
    'piv/module',
    'piv/services/VectorService',
    'piv/controllers/PivController',
    'piv/controllers/GraphController',
    'piv/directives/FileReadDirective'
], function (ModulePiv, VectorService, PivController, GraphController, FileReadDirective) {

    ModulePiv
        .service('VectorService', VectorService)
        .controller('PivController', PivController)
        .controller('GraphController', GraphController)
        .directive('fileread', FileReadDirective);

});
