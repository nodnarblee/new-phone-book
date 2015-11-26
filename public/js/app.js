'use strict';

/* App Module */

var phonebookApp = angular.module('phonebookApp', [
    'ngRoute',
    'ngResource',
    'phonebookControllers',
    'phonebookServices'
]);

phonebookApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/contacts.html',
                controller: 'PhoneBookCtrl as phone'
            }).
            when('/contact-info/:contact', {
                templateUrl: 'partials/contact_info.html',
                controller: 'ContactInfoCtrl as contact'
            }).
            when('/edit-contact/:contact', {
                templateUrl: 'partials/edit.html',
                controller: 'EditContactCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
