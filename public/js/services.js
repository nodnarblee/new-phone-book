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
        return phonebook
    }]);

// a service to set the current contact when a contact is selected, shared between controllers
phonebookServices.factory('setContactService', [
    function(){
        var setContact = {}
        setContact.currentContact = function(contacts, number){
            var contactsArr = contacts.contacts
            if (number !== undefined) {
                contactsArr.forEach(function(contact){
                    number === contact.phone ? setContact = contact : null;
                    // this evaluates the phone-number and sets the $scopeCurrentContact if a match is found, otherwise undefined.
                })
                return setContact;
            }
        };
        return setContact;
    }]);
