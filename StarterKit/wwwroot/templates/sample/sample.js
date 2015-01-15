(function () {
    'use strict';

    angular
        .module('app')
        .controller('sample', sample);

    sample.$inject = ['$location', 'authService', 'sampleService'];

    function sample($location, authService, ss) {
        var vm = this;
        vm.title = 'This is the sample contorller';

        ss.makeCall();
    }

})();
