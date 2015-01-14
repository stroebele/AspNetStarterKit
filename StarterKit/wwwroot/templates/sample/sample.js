(function () {
    'use strict';

    angular
        .module('app')
        .controller('sample', sample);

    sample.$inject = ['$location', 'authService'];

    function sample($location, authService) {
        var vm = this;
        vm.title = 'This is the sample contorller';
    }

})();
