import angular from 'npm/angular';
import _ from 'npm/lodash';
import EsClient from './elasticsearch/elastic.client';
import MetricComponent from 'common/metric.component/metric.component';
import register from 'common/register';
require('npm/elasticsearch/src/elasticsearch.angular');


let commonModule = angular.module('app.common', [
    'elasticsearch'
]);

register('app.common').
    service('esClient', EsClient).
    directive('metric', MetricComponent);

export default commonModule;
