(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);


    function config() {
        var baseUrl = 'http://localhost:38643/';
        var service = {
            baseUrl: baseUrl
        };
        return service;
    }
})();