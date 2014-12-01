'use strict';

/* Services */

define(function () {

    'use strict';

    var VectorService = function ($resource) {
		this.getVectors = function(){
			  return $resource('api/vectors/').get();
		}
	}

    VectorService.$inject = ['$resource'];

    return VectorService;
});

