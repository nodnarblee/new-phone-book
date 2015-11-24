'use strict';

/* Controllers */

var phonebookControllers = angular.module('phonebookControllers', []);

phonebookControllers.controller('PhoneBookCtrl', ['$scope', 'contactService', '$http',
    function($scope, contactService, $http){
        $scope.phonebook = [];
        //contactService.getContacts()
        contactService.query()
        //    .then(function(data){
        //    $scope.phonebook = data;
        //});


        //$http.get('assets/contacts.json').success(function(data) {
        //    $scope.phonebook = contactService
            //console.log($scope.phonebook)

        //});
    }]);

phonebookControllers.controller('ContactInfoCtrl', ['$scope',
    function ($scope, $routeParams){
        //var contact = $routeParams
        //var index = $routeParams.contact_index;
        //$scope.currentContact = $scope.contacts[index];
    }]);

