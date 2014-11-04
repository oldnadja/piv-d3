'use strict';

/* Controllers */

var pivControllers = angular.module('pivControllers', []);

pivControllers.controller('PivCtrl', ['$scope', 'Vector',
    function($scope, Vector) {
        var vectors = Vector.query();

        vectors.$promise.then(function (result) {
            var graph = new Graph(result);
            graph.initialize();
        });

    }
]);
