(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', home);

    home.$inject = ['$location', 'authService'];

    function home($location, authService) {
        var vm = this;
        vm.title = 'This is the home contorller';
    }
        
})();
