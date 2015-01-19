(function () {
    'use strict';
    var app = angular.module('app', ['ui.router', 'LocalStorageModule']);


    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });


    //app.run(['authService', function (authService) {
    //    authService.fillAuthData();
    //}]);

})();



