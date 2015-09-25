class EsClient {
	/*@ngInject*/
	constructor(esFactory) {
		this.client = esFactory({
	        host: 'localhost:9200'
	    });
	}
}

export default EsClient;