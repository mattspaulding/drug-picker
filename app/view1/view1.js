'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'app/view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        var drugs=['Fartiva', 'Phenar', 'Swazeve', 'Hamet', 'Boozaxil', 'Stainair', 'Boobify', 'Glazestra', 'Crappippa', 'Moputrin']
        $scope.homeMed =
        {
            drugs:drugs ,
            name: 'Select Home Med'
        }
        $scope.drugAdministered =
        {
            drugs:drugs ,
            name: 'Select Drug Administered'
        }
    }]);