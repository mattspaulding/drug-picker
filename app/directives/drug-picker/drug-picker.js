'use strict';

angular.module('myApp.drugPicker', [])

    .directive('drugPicker', function () {
        return {
            restrict: 'E',
            scope: {
                meds: '=' // Create an isolate scope to decouple directive from parent scope
            },
            templateUrl: 'app/directives/drug-picker/drug-picker.html'
        };
    });