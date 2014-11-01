'use strict';

/* Services */

var pivServices = angular.module('pivServices', ['ngResource']);

pivServices.factory('Vector', ['$resource',
    function($resource){
        return $resource('vector/:phoneId.json', {}, {
            query: {method:'GET', params:{vector:'vector'}, isArray:true}
        });
    }]);