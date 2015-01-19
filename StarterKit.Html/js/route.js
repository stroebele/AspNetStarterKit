
(function () {

    'use strict';
    angular.module('app').config(route);
    route.$inject = ['$stateProvider', '$urlRouterProvider'];

    var templateDir = 'templates/'


    function route($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        var bodyStates = [
            {name: 'login'},
            {name: 'home'},
            {name: "signup"},
            {name: "sample"},
        ];

        var header = {
            controller: "header",
            templateUrl: templateDir +  "header/header.html",
            controllerAs: 'vm'
        }


        angular.forEach(bodyStates, function (bs) {

            if (bs.body === undefined)
            {
                bs.body = {
                    url: "/" + bs.name,
                    controller: bs.name,
                    templateUrl: bs.name + "/" + bs.name + ".html",
                    controllerAs: 'vm'
                }
            }

            bs.body.templateUrl = templateDir + bs.body.templateUrl;
            $stateProvider.state(bs.name,
                {
                    url: bs.body.url,
                    views: {
                        'header': header,
                        'body': bs.body
                    }
                });
        });



    }




})();



