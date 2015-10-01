import angular from 'npm/angular';
import uiRouter from 'npm/angular-ui-router';
import HomeComponent from './home.component';
import ngMdIcons from 'npm/angular-material-icons';
import register from 'common/register';
import './home.scss';

let homeModule = angular.module('home', [
    uiRouter, ngMdIcons
])

.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home flex layout="row" layout-fill></home>'
        });
});

register('home').
    directive('home', HomeComponent);

export default homeModule;
