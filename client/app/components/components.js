import angular from 'npm/angular';
import Home from './home/home';

let componentModule = angular.module('app.components', [
  Home.name
]);

export default componentModule;