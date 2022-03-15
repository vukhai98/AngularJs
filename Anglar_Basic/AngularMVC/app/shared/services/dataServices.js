(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataServices', ['$htpp', '$q', function ($htpp, $q) {
            var service = {};

            service.getUsers = function () {
                var deferred = $q.defer();
                $htpp.get('/User/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getUserById = function (id) {
                var deferred = $q.defer();
                $htpp.get('/User/Details' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addUser = function (user) {
                var deferred = $q.defer();
                $htpp.get('/User/Create', user).then(function (result) {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editUser = function (user) {
                var deferred = $q.defer();
                $htpp.get('/User/Edit', user).then(function (result) {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editUser = function (id) {
                var deferred = $q.defer();
                $htpp.get('/User/Delete', { id: id }).then(function (result) {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();