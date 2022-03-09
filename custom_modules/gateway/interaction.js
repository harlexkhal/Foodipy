import NetworkGateway from './gateway.js';

class InteractionGateway extends NetworkGateway {
    constructor(instanceID) {
        super('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/');
        this.dbInstance = instanceID;
    }
    init = () => {}
}
export default InteractionGateway;