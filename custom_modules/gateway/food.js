import NetworkGateway from './gateway.js';

class FoodNetwork extends NetworkGateway {
  constructor() {
    super('www.themealdb.com/api/json/v1/1/');
  }

  getItemByID = async (id) => {
    const data = await fetch(`${this.baseurl}lookup.php?i=${id}`);
    return data.json();
  }

  getItemsByCategory = async (category) => {
    const data = await fetch(`${this.baseurl}filter.php?c=${category}`);
    return data.json();
  }

  fetchAllCategories = async () => {
    const data = await fetch(`${this.baseurl}list.php?c=list`);
    return data.json();
  }
}
export default FoodNetwork;