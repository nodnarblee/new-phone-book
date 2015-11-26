'use strict';

/* Services */

var phonebookServices = angular.module('phonebookServices', []);

// a service to retrieve all contacts from contacts.json to share between the controllers
phonebookServices.factory('contactService', ['$http',
    function($http){

        var phonebook = {}

        phonebook.allContacts = $http({
                method: 'GET',
                url: 'assets/contacts.json'
            })
            //.success(function(data){
            //    data.contacts
            //});
        return phonebook
    }]);
