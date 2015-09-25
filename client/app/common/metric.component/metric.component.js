import template from './metric.component.html';

class MetricComponent {
    /*@ngInject*/
    constructor() {
        this.name = "Something";
        this.template = template;
        this.restrict = "E";
    }

    link($scope, element) {
        console.log("MetricComponent:: Link called");
    }
}

export default MetricComponent;