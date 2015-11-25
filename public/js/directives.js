'use strict';

/* Directives */

var phonebookDirectives = angular.module('phonebookDirectives', []);

phonebookDirectives.directive('myTemplate', function(templateService) {
    return {
        restrict: 'E',
        controller: function($scope, $attrs, templateService) {
            $scope.$on('handleBroadcast', function() {
                $scope.message = templateService.message;
            });
        }
    };
});
