'use strict';

/* Services */

var phonebookServices = angular.module('phonebookServices', []);

phonebookServices.factory('contactService', ['$http',
    function($http){
        return {
            getContacts : function() {
                return $http({
                    url: 'assets/contacts.json',
                    method: 'GET'
                })
            }
        }
    }]);
