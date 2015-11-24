'use strict';

/* Services */

var phonebookServices = angular.module('phonebookServices', []);

phonebookServices.factory('contactService', ['$resource',
    function($resource){

        return $resource('assets/contacts.json', {}, {
            query: {method:'GET'}, isArray:true, url:'assets/contacts.json'
        });

        //return{
        //    getContacts : function() {
        //        return $http({
        //            url: 'assets/contacts.json',
        //            method: 'GET'
        //        }).then(function(res) {
        //            return res;
        //        })
        //    }
        //}
    //    var phonebook = {};
    //    var contacts = {};
    //    contacts.getContacts = function(){
    //        $http.get('assets/contacts.json').success(function(data) {
    //            contacts = data;
    //        })
    //    };
    //    return contacts

    }]);
//return $resource('assets/contacts.json', {}, {
//    query: {method:'GET'}, isArray:true, url:'assets/contacts.json'
//});
