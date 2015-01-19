(function () {
    'use strict';

    angular
        .module('app')
        .factory('sampleService', sampleService);

    sampleService.$inject = ['$http', '$q', 'config'];

    function sampleService($http, $q, config) {
        var serviceBase = config.baseUrl;

        return {
            makeCall: makeCall
        };

   
        function makeCall() {

            return $http.get(serviceBase + 'api/Sample').then(function (response) {
                return response;
            });

        };


    }
})();