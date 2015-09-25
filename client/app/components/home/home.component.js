import template from './home.html';
import controller from './home.controller';

class HomeComponent {
    /*@ngInject*/
    constructor() {
        this.scope = {};
        this.restrict = 'E';
        this.template = template;
        this.controller = controller;
        this.controllerAs = 'home';
        this.bindToController = true;
    }
}

export default HomeComponent;
