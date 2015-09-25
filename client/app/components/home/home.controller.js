class HomeController {
    /*@ngInject*/
    constructor(esClient, $q, $timeout, $scope, $state) {
        this.name = 'home';
    }
}

export default HomeController;
