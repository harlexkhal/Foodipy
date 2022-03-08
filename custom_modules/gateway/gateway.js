class NetworkGateway {
  constructor(src) {
    this.start(src);
  }

  start = (srcLink) => {
    this.baseurl = srcLink;
  }
}
export default NetworkGateway;