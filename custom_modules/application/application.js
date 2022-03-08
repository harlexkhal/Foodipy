import NetworkGateway from '../gateway/gateway.js';

class Application {
  constructor() {
    const connection = new NetworkGateway();
    connection.start();
  }

  start = () => {}
}
export default Application;