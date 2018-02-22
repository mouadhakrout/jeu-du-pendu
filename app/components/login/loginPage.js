(function(angular) {
    'use strict';
angular.module('mainApp').component('loginPage', {
    templateUrl: '../app/pages/loginPage.html',
    bindings: {
        message: '='
    },
    controller:  ['$scope', '$timeout', function($scope, $timeout) {
    }]
});

})(window.angular);