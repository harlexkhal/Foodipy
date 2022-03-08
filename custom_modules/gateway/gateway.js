class NetworkGateway {
  constructor(src) {
    this.baseurl = '';
    this.start(src);
  }

  start = (srcLink) => {
    this.baseurl = srcLink;
  }
}
export default NetworkGateway;