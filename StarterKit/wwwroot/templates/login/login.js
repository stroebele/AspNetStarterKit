(function () {
    'use strict';

    angular
        .module('app')
        .controller('login', login);

    login.$inject = ['$location', 'authService'];

    function login($location, authService) {
        var vm = this;
        vm.loginData = {
            userName: "",
            password: ""
        };

        vm.message = "";

        vm.login = function () {

            //if (authService.authentication.isAuth===true) {
            //    authService.logOut();
            //}
            //else {
            authService.login(vm.loginData).then(function (response) {

                $location.path('/sample');

            },
             function (err) {
                 vm.message = err.error_description;
             });
            //}
        };
    }
})();
