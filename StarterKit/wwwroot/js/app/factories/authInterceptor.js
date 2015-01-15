(function () {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location', 'localStorageService', 'notify'];

    function authInterceptor($q, $location, localStorageService, notify) {
        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        function request(config) {

            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        function responseError(rejection) {
            if (rejection.status === 401) {
                notify.error("Access Denied", "To gain access to the requested resource login as a diffrent user")
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    }
})();
