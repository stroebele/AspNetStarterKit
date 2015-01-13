(function () {
    'use strict';

    angular
        .module('app')
        .controller('header', header);

    header.$inject = ['authService', '$state'];

        function header(auth, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.name = 'header';
        //vm.userName = 'Log In'
        //vm.isAuth = false;
        //vm.title = 'header';
        //vm.isState = isState;
        //vm.logOut = logOut;

        //activate();

        //function isState(checkStateName) {
        //    return checkStateName == $state.current.name;

        //};
        //function activate() {
        //    if (auth.authentication.isAuth) {

        //        vm.userName = auth.authentication.userName;
        //        vm.isAuth = auth.authentication.isAuth;
        //    }
        //};
        //function logOut() {
        //    if (vm.isAuth === true) {
        //        auth.logOut();
        //        auth.isAuth = false;
        //    }
        //}
    }
})();