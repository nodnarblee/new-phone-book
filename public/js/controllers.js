'use strict';

/* Controllers */

var phonebookControllers = angular.module('phonebookControllers', []);

phonebookControllers.controller('PhoneBookCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('assets/contacts.json').success(function(data) {
            $scope.phonebook = data;
        });

    }]);
