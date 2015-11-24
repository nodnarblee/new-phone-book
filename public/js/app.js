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
                templateUrl: 'index.html',
                controller: 'PhoneBookCtrl'
            }).
            when('/contact-info/:contact', {
                templateUrl: '/partials/contact_info.html',
                controller: 'ContactInfoCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
