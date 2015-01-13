
(function () {

    'use strict';
    angular.module('app').config(route);
    route.$inject = ['$stateProvider', '$urlRouterProvider'];

    var templateDir = 'controllersAndViews/'


    function route($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        var bodyStates = [
            {
                name: 'login', body: {
                    url: "/login",
                    controller: "login",
                    templateUrl: "login/login.html",
                    controllerAs: 'vm'
                }
            },
            {
                name: 'home', body: {
                    url: "/home",
                    controller: "home",
                    templateUrl: "home/home.html",
                    controllerAs: 'vm'
                }
            },
            {
                name: "register", body: {
                    url: "/register",
                    controller: "registerUser",
                    templateUrl: "registerUser/registerUser.html",
                    controllerAs: 'vm'
                }
            },
        ];

        //var header = {
        //    controller: "header",
        //    templateUrl: "app/controllersAndViews/header/header.html",
        //    controllerAs: 'vm'
        //}


        angular.forEach(bodyStates, function (bs) {
            bs.templateUrl = templateDir + bs.templateUrl;
            $stateProvider.state(bs.name,
                {
                    url: bs.body.url,
                    views: {
                        //'header': header,
                        'body': bs.body
                    }
                });
        });



    }




})();



