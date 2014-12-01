define([
    'underscore'
], function (_) {
    'use strict';

    var PivController = function($scope, $http, Vector) {
	
	console.log(';ewgkjlerjykljeklryjklrjeyklrejklrjewykl');
		Vector.$promise.then(function(result){
			console.log(result);
			var vectors = Vector.vectors;
			var graph = new Graph(vectors);
			graph.initialize();
		});
        
        $scope.formUrl = 'upload';
        $scope.formData = {};

        $scope.processForm = function(){
            console.log($scope.formData);
            $http({
                method  : 'POST',
                url     : $scope.formUrl,
                data    : $.param($scope.formData),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
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
	
	
    PivController.$inject = ['$scope', '$http', 'VectorService'];

    return PivController;
});