'use strict';

describe('phonebookApp controllers', function() {

    beforeEach(module('phonebookApp'));

    //PhoneBookController
    describe('PhoneBookCtrl', function($scope){

        var $scope
        var $controller;
        var contactService;

        beforeEach(inject(function($rootScope, _$controller_, _contactService_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $scope = $rootScope.$new();
            $controller = _$controller_;
            contactService = _contactService_;
        }));

        describe('$scope.phonebook', function(){
            it('retrieves contacts from phonebook using contactService', function() {

                var controller = $controller('PhoneBookCtrl', { $scope: $scope });
                var contacts = contactService.allContacts;
                expect($scope.phonebook).toEqual(contacts);

            });

        });

    });

    //ContactInfoController
    describe('ContactInfoCtrl', function(){

        var $scope;
        var $controller;
        var contactService;
        var $routeParams;

        beforeEach(inject(function($rootScope, _$controller_, _contactService_, _$routeParams_){

            // The injector unwraps the underscores (_) from around the parameter names when matching
            $scope = $rootScope.$new();
            $controller = _$controller_;
            contactService = _contactService_;
            $routeParams = _$routeParams_;

        }));

        describe('$scope.phonebook', function() {
            it('retrieves contacts from phonebook using contactService', function() {

                var controller = $controller('PhoneBookCtrl', { $scope: $scope });
                var contacts = contactService.allContacts;
                expect($scope.phonebook).toEqual(contacts);

            });
        });

    });

    //EditContactController
    describe('EditContactCtrl', function(){

        var $scope;
        var $controller;
        var contactService;
        var $routeParams;

        beforeEach(inject(function($rootScope, _$controller_, _contactService_, _$routeParams_){

            // The injector unwraps the underscores (_) from around the parameter names when matching
            $scope = $rootScope.$new();
            $controller = _$controller_;
            contactService = _contactService_;
            $routeParams = _$routeParams_;

        }));

        describe('$scope.phonebook', function() {
            it('retrieves contacts from phonebook using contactService', function() {

                var controller = $controller('PhoneBookCtrl', { $scope: $scope });
                var contacts = contactService.allContacts;
                expect($scope.phonebook).toEqual(contacts);

            });

        });
    });
});
