import angular from 'npm/angular';
import ngMaterial from 'npm/angular-material';
import uiRouter from 'npm/angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'npm/angular-material/angular-material.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Common.name,
    Components.name
])

.directive('app', AppComponent);
