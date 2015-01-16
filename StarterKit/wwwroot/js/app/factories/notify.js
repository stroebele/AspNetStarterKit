(function () {
    'use strict';

    angular
        .module('app')
        .factory('notify', notify); 

    notify.$inject = ['config'];

    function notify(config) {

        init();

        function init()
        {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "progressBar": false,
                "positionClass": "toast-top-full-width",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        }

        if (config.debug)
        {
            toastr.debug = toastr.info;
        }
        else
        {
            toastr.debug = function () { };
        }

        return window.toastr;
    }
})();