define([
    'underscore'
], function (_) {
    'use strict';

    var PivController = function($scope, $http) {


        /*VectorService.$promise.then(function(result){
			console.log(result);
			var vectors = VectorService.getVectors();

			var graph = new Graph(vectors);
			graph.initialize();
		});*/
        
        $scope.formUrl = 'upload';
        $scope.formData = {};

        $scope.processForm = function(){

            $http({
                method  : 'POST',
                url     : $scope.formUrl,
                data    : $.param($scope.formData),  // pass in data as strings
                headers : { 'Content-Type': 'multipart/form-data' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = data.errors.name;
                        $scope.errorSuperhero = data.errors.superheroAlias;
                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    }
                });
        };

    }
	
	
    PivController.$inject = ['$scope', '$http'];

    return PivController;
});