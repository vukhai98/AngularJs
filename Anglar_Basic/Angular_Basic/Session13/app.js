/// <reference path="../scripts/angular.js" />
(function () {
    var app = angular.module('app', []);

    app.controller('ngincludeController', ngincludeController);

    ngincludeController.$inject = ['$scope'];

    function ngincludeController($scope) {
        var employees = [
            { name: 'Hải', birthDate: new Date('07/03/1998'), salary: 1200000, gender: 'Male', status: true },
            { name: 'Hùng', birthDate: new Date('06/03/1990'), salary: 1000000, gender: 'Male', status: false },
            { name: 'Khải', birthDate: new Date('01/09/1999'), salary: 2200000, gender: 'Female', status: true },
            { name: 'Hoa', birthDate: new Date('02/03/1998'), salary: 1900000, gender: 'Female', status: false },
            { name: 'Tùng', birthDate: new Date('07/03/2002'), salary: 1200000, gender: 'Male', status: true },
            { name: 'Ly', birthDate: new Date('11/11/1999'), salary: 1250000, gender: 'Female', status: true }
        ];
        $scope.employees = employees;
        $scope.employeeView = 'tableEmployeeView.html';
    }
    app.filter('status', function () {
        return function (input) {
            if (input == true) {
                return 'Kích hoạt';
            }
            else {
                return 'Bị khóa';
            }
        };
    });
})();