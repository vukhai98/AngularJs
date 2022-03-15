(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/', {
                    controller: 'userCtrl',
                    templateUrl: '/app/templates/user.html'
                })
                .when('/adduser', {
                    controller: 'userAddCtrl',
                    templateUrl: '/app/templates/addUser.html'
                })
                .otherwise({ redirecTo: '/' });

        }]);
})();