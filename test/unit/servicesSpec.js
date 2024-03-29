'use strict';

describe('phonebookApp controllers', function() {

    describe('contactService', function () {

        beforeEach(module('phonebookApp'));

        var contactService, httpBackend;

        beforeEach(inject(function (_contactService_, $httpBackend) {
            contactService = _contactService_;
            httpBackend = $httpBackend;
        }));

        it("should retrieve the contact list data", function () {
            httpBackend.whenGET("assets/contacts.json").respond({
                "contacts": [
                    {
                        "firstname": "Cameron",
                        "lastname": "Dubas",
                        "phone": "6047280012",
                        "address": "289 Abbott St., Vancouver, BC, V3M 2L7",
                        "email": "cameron@changeheroes.com"
                    },
                    {
                        "firstname": "Mike",
                        "lastname": "Tan",
                        "phone": "6043421109",
                        "address": "102 Homer St., Vancouver, BC, V2K 3G7",
                        "email": "mike@changeheroes.com"
                    },
                    {
                        "firstname": "Ryan",
                        "lastname": "Campbell",
                        "phone": "6049881822",
                        "address": "1807 Granville St, Vancouver, BC, V7G 2F9",
                        "email": "ryan@changeheroes.com"
                    },
                    {
                        "firstname": "Steven",
                        "lastname": "Zozula",
                        "phone": "6045200192",
                        "address": "100 Water St., Vancouver, BC, V8I 2G3",
                        "email": "steven@changeheroes.com"
                    },
                    {
                        "firstname": "Daryl",
                        "lastname": "Chmyko",
                        "phone": "6042240422",
                        "address": "289 Cordova St., Vancouver, BC, V6B 2L4",
                        "email": "daryl@changeheroes.com"
                    },
                    {
                        "firstname": "Aaron",
                        "lastname": "Vandenbrink",
                        "phone": "6047581029",
                        "address": "200 Abbott St., Vancouver, BC, V9M 3K2",
                        "email": "aaron.vandenbrink@gmail.com"
                    }
                ]
            });
        });

    });

});
