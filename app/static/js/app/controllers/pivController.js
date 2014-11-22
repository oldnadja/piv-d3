'use strict';

/* Controllers */

var pivControllers = angular.module('pivControllers', []);

pivControllers.controller('PivCtrl', ['$scope', 'Vector',
    function($scope, Vector) {
        var vectors = Vector.query();

        vectors.$promise.then(function (result) {
            console.log(result);
            var graph = new Graph(result);
            graph.initialize();
        });

        $scope.formUrl = "upload";

        $scope.formData = {};

        $scope.processForm = function() {
            console.log($scope.formData), $http({
                method: "POST",
                url: $scope.formUrl,
                data: $.param($scope.formData),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).success(function (data) {
                console.log(data), data.success ? $scope.message = data.message : ($scope.errorName = data.errors.name,
                    $scope.errorSuperhero = data.errors.superheroAlias);
            });
        };
    }
]);
