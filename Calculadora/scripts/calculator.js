//angular
//  .module('calculator', [
//    'ngRoute'
//  ]);
angular.module('calculator', ['ngRoute'])
    .controller('CalculatorController', function ($scope) {
        var self = this;
        $scope.result = "";
        
        self.calcular = function ()
        {
            $scope.result = eval($scope.result);
        }
        self.limpiar = function () {
            $scope.result = "";
        }
        self.buton = function (value) {
            $scope.result +=  value;
        }

    });