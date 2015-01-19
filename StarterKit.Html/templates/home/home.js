(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', home);

    home.$inject = ['$location', 'authService', 'notify'];

    function home($location, authService, n) {
        var vm = this;
        vm.title = 'This is the home contorller';
    }
        
})();
