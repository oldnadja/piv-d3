'use strict';

/* Services */

var pivServices = angular.module('pivServices', ['ngResource']);

pivServices.factory('Vector', ['$resource',
    function($resource){
        return $resource('api/vectors/').get();
    }]);