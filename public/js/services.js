'use strict';

/* Services */

var phonebookServices = angular.module('phonebookServices', []);

phonebookServices.factory('contactService', ['$http',
    function($http){

        var phonebook = {}

        phonebook.allContacts = $http({
                method: 'GET',
                url: 'assets/contacts.json'
            })
            .success(function(data){
                data.contacts
            });

        return phonebook
    }]);

phonebookServices.factory('templateService',['$rootScope',
    function($rootScope) {
        var templateService = {};

        templateService.view = '';

        templateService.prepForBroadcast = function(view) {
            this.message = view;
            this.broadcastItem();
        };

        templateService.broadcastItem = function() {
            $rootScope.$broadcast('handleTemplate');
        };

        return templateService;
    }]);
