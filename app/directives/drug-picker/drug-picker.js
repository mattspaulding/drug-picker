'use strict';

angular.module('myApp.drugPicker', [])

    .directive('drugPicker', function () {
        return {
            restrict: 'E',
            scope: {
                meds: '=' // Create an isolate scope to decouple directive from parent scope
            },
            templateUrl: 'app/directives/drug-picker/drug-picker.html',
            controller: 'drugPickerCtrl'
        };
    })

.controller('drugPickerCtrl',function($scope){
    $scope.pickDrug=function($event,drug){
        $scope.meds.name=drug;
        $scope.isSearchOpen=false
    }
})