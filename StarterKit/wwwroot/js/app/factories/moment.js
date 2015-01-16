(function () {
    'use strict';

    angular
        .module('app')
        .factory('moment', moment);


    function moment() {

        return window.moment;
    }
})();