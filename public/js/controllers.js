'use strict';

/* Controllers */

var phonebookControllers = angular.module('phonebookControllers', []);

phonebookControllers.controller('PhoneBookCtrl', ['$scope', '$http', 'contactService',
    function($scope, $http, contactService) {
        // handles fetching the contact data
        $scope.phonebook = contactService.getContacts();
        $scope.phonebook.success(function(data) {
            $scope.phonebook = data;
        });

    }]);

phonebookControllers.controller('ContactInfoCtrl', ['$scope', 'contactService', '$routeParams', '$location',
    function($scope, contactService, $routeParams, $location) {

        $scope.moduleState = 'view-mode';

        $scope.switchView = function(view) {
            $scope.moduleState = view;
        };

        //since the contacts dont have ID's, I used the phone-number as the unique identifier for each contact.
        $scope.number = $routeParams.contact;

        $scope.getContacts = contactService.getContacts();
        $scope.getContacts.success(function(data) {
            $scope.phonebook = data;
        })
        .then(function(){
            var contactsArr = $scope.phonebook.contacts;
            contactsArr.forEach(function(contact){
                // this evaluates the phone-number and sets the $scopeCurrentContact if a match is found, otherwise null.
                $scope.number === contact.phone ? $scope.currentContact = contact : null;
            })
        });
    }]);

phonebookControllers.controller('EditContactCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.number = $routeParams.contact;

        $scope.getContacts = contactService.getContacts();
        $scope.getContacts.success(function(data) {
            $scope.phonebook = data;
        })
            .then(function(){
                var contactsArr = $scope.phonebook.contacts;
                contactsArr.forEach(function(contact){
                    $scope.number === contact.phone ? $scope.currentContact = contact : null;
                })
            });

    }]);
