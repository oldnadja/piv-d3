_.mixin({

    getQueryStringByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.search);

        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    include: function(str, needle){
        if (needle === '') {
            return true;
        }
        if (str == null) {
            return false;
        }

        return String(str).indexOf(needle) !== -1;
    },

    createEmptyModules: function (moduleNames) {
        if(moduleNames.length === 0) {
            throw new Error("None of the modules could be loaded.");
        }

        if (angular == null) {
            throw new Error("Cannot catch module, AngularJS is null.");
        }

        var ngModule,
            nextModule;
        try {
            ngModule = angular.module(moduleNames[0]);
        } catch(err) {
            ngModule = angular.module(moduleNames[0], []);
        }

        nextModule = moduleNames.slice(1);

        if(nextModule == null || nextModule.length === 0) {
            return ngModule;
        }
        else {
            return this.createEmptyModules(nextModule);
        }
    },

    copyParams: function (params) {
        if (!params) {
            params = {};
        }

        return angular.copy(params);
    }
});