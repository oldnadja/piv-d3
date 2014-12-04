define( 'main', [
        'angular',
		'config-angular',
        'config-modules'
    ],


    function (angular, configAngular) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['app']);
        });
});
