(function(angular) {
    'use strict';
    var mainApp = angular.module('mainApp', ['ui.router']);
    mainApp.config(function($stateProvider, $urlServiceProvider) {
        $urlServiceProvider.rules.otherwise({ state: 'login' });
        $stateProvider.state('login', {
            url: '/login',
            component: 'loginPage',
        });
        $stateProvider.state('start', {
            url: '/start/:loginName',
            component: 'startPage',
            params: { loginName: 'mouadh akrout'},
        });
    });
})(window.angular);