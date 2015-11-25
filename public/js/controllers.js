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

phonebookControllers.controller('ContactInfoCtrl', ['$scope', 'contactService', '$routeParams',
    function($scope, contactService, $routeParams) {

        //since the contacts dont have ID's, I used the phone-number as the unique identifier for each contact.
        $scope.number = $routeParams.contact;

        $scope.phonebook = contactService.allContacts

        $scope.phonebook.success(function(data) {
            $scope.phonebook = data;
        })
        .then(function(){
            var contactsArr = $scope.phonebook.contacts;
            if ($scope.number !== undefined) {
                contactsArr.forEach(function(contact){
                    $scope.number === contact.phone ? $scope.currentContact = contact : null;
                    // this evaluates the phone-number and sets the $scopeCurrentContact if a match is found, otherwise undefined.
                })
            }
        });

    }]);

phonebookControllers.controller('EditContactCtrl', ['$scope', '$routeParams', 'contactService',
    function($scope, $routeParams, contactService) {
        $scope.number = $routeParams.contact;

        $scope.phonebook = contactService.allContacts

        $scope.phonebook.success(function(data) {
            $scope.phonebook = data;
        })
        .then(function(){
            var contactsArr = $scope.phonebook.contacts;
            contactsArr.forEach(function(contact){
                $scope.number === contact.phone ? $scope.currentContact = contact : null;
            })
        });

    }]);
