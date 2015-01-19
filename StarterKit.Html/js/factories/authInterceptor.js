(function () {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location', 'localStorageService', 'notify', '$injector'];

    function authInterceptor($q, $location, localStorageService, notify, $injector) {
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
            var deferred = $q.defer();

            if (rejection.status === 401) {
                notify.debug("Trying to refresh");
                var authService = $injector.get('authService');
                authService.refreshToken().then(function (response) {
                    if (rejection.config.isRetry === true) {
                        notify.error("Access Denied", "To gain access to the requested resource login")
                        $location.path('/home');
                        deferred.reject(response);
                    }
                    else {
                        retryHttpRequest(rejection.config, deferred, response);
                    }
                }, function () {
                    notify.error("Access Denied", "To gain access to the requested resource login")
                    authService.logOut();
                    $location.path('/login');
                    deferred.reject(rejection);
                });
            } else {
                deferred.reject(rejection);
            }
            return deferred.promise;
        }

        function retryHttpRequest(config, deferred) {
            var myHttp = $injector.get('$http');
            config.isRetry = true;
            myHttp(config).then(function (response) {
                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });
        }
    }
})();
