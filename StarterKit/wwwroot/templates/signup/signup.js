﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('signup', signup);

    //signup.$inject = ['$location', '$timeout', 'authService'];

    //function signup($location, $timeout, authService) {
    function signup() {
        /* jshint validthis:true */
        var vm = this;
        //vm.title = 'signup';
        //vm.signUp = signUp;

        //activate();

        //function activate() { }

        //vm.savedSuccessfully = false;
        //vm.message = "";

        //vm.registration = {
        //    userName: "",
        //    password: "",
        //    confirmPassword: ""
        //};

        //function signUp() {

        //    authService.saveRegistration(vm.registration).then(function (response) {

        //        vm.savedSuccessfully = true;
        //        vm.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
        //        startTimer();

        //    },
        //     function (response) {
        //         var errors = [];
        //         for (var key in response.data.modelState) {
        //             for (var i = 0; i < response.data.modelState[key].length; i++) {
        //                 errors.push(response.data.modelState[key][i]);
        //             }
        //         }
        //         vm.message = "Failed to register user due to:" + errors.join(' ');
        //     });
        //};

        //var startTimer = function () {
        //    var timer = $timeout(function () {
        //        $timeout.cancel(timer);
        //        $location.path('/login');
        //    }, 2000);
        //}

    }
})();


