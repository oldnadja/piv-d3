define([
    'underscore'
], function (_) {
    'use strict';

    var GraphController = function ($scope, VectorService) {
        this.$scope = $scope;
        this.vectorService = VectorService;

        this.initialize();
	};

    var prototype = GraphController.prototype;

    prototype.initialize = function(){
        var self = this;
        var vectorsPromise = this.vectorService.getVectors();

        vectorsPromise.$promise.then(function(result){
            self.vectors = result.vectors;
            self.getLinks();
        });
    };

    prototype.getLinks = function(){
        console.log(this.vectors);
    };
	
	
    GraphController.$inject = ['$scope', 'VectorService'];

    return GraphController;
});