(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);


    function config() {
        var baseUrl = 'http://localhost:3000/';
        var service = {
            baseUrl: baseUrl
        };
        return service;
    }
})();