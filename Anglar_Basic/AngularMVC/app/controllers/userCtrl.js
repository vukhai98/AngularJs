(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', ['$scope', 'dataServices', function ($scope, dataServices) {
            $scope.users = [];

            getData();

            function getData() {
                dataServices.getUsers().then(function () {
                    $scope.users = result;
                });
            }
        }])
        .controller('userAddCtrl', ['$scope', '$location', 'dataServices', function ($scope, $location, dataServices) {
            $scope.createUser = function (user) {
                dataServices.addUser(user).then(function () {
                    toastr.success('User created successfully');
                    $location.path('/');
                }, function () {
                    toastr.error('Error in creating user');
                });
            };

        }]);
})();
