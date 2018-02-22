(function(angular) {
    'use strict';
angular.module('mainApp').component('startPage', {
    templateUrl: '../app/pages/startPage.html',
    controller:  ['$scope','$stateParams', function($scope, $stateParams) {
        $scope.loginName = $stateParams.loginName;
    }]
});
})(window.angular);