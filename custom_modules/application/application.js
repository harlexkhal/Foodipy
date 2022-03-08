import FoodNetwork from '../gateway/food.js';
import Window from './window.js';

class ApplicationEngine {
  constructor() {
    this.fooAPIConnection = new FoodNetwork();
    this.window = new Window();
  }

  start = () => {
    this.fetchFoodItems();
  }

  fetchFoodItems = () => {
    const res = this.fooAPIConnection.fetchAllCategories();
    res.then((data) => {
      const categoryList = data.meals;
      const rand = Math.floor(Math.random() * categoryList.length);

      const promiseRes = this.fooAPIConnection.getItemsByCategory(categoryList[rand]);
      promiseRes.then((data) => {
        this.window.displayItems(data.meals);
      })
        .catch((error) => {
          throw error;
        });
    })
      .catch((error) => {
        throw error;
      });
  }

  FetchFoodItemByID = (id) => {
    const res = this.fooAPIConnection.getItemByID(id);
    res.then((data) => {
      this.window.displayItem(data.meals);
    })
      .catch((error) => {
        throw error;
      });
  }
}
export default ApplicationEngine;