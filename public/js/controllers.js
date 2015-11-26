'use strict';

/* Controllers */

var phonebookControllers = angular.module('phonebookControllers', []);

phonebookControllers.controller('PhoneBookCtrl', ['$scope', '$http', 'contactService',
    function($scope, $http, contactService) {
        // handles fetching the contact data
        $scope.phonebook = contactService.allContacts

        $scope.phonebook.success(function(data) {
            $scope.phonebook = data;
        });

    }]);

phonebookControllers.controller('ContactInfoCtrl', ['$scope', 'contactService', '$routeParams', 'setContactService',
    function($scope, contactService, $routeParams, setContactService) {
        //since the contacts dont have ID's, I used the phone-number as the unique identifier for each contact.
        $scope.number = $routeParams.contact;

        $scope.phonebook = contactService.allContacts

        $scope.phonebook.success(function(data) {
            $scope.phonebook = data;
        })
        .then(function(){
            $scope.currentContact = setContactService.currentContact($scope.phonebook, $scope.number);
        });

    }]);

phonebookControllers.controller('EditContactCtrl', ['$scope', '$routeParams', 'contactService', 'setContactService',
    function($scope, $routeParams, contactService, setContactService) {

        $scope.number = $routeParams.contact;

        $scope.phonebook = contactService.allContacts

        $scope.phonebook.success(function(data) {
            $scope.phonebook = data;
        })
        .then(function(){
            $scope.currentContact = setContactService.currentContact($scope.phonebook, $scope.number);
        });

    }]);
