import NetworkGateway from './gateway.js';

class InteractionGateway extends NetworkGateway {
    constructor(instanceID) {
        super('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');
        this.dbInstance = instanceID;
    }
    
    addLike = async (itemID) => {
        const data = await fetch(`${this.baseurl}${this.dbInstance}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: itemID }),
        });
    }

    getLIkes = async () => {
        const data = await fetch(`${this.baseurl}${this.dbInstance}/likes`, { method: 'GET'});
        return data.json();
    }

    getComments = (itemID) => {

    }
}
export default InteractionGateway;