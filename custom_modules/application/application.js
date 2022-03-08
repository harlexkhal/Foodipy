import FoodNetwork from '../gateway/food.js';
import Window from './window.js';

class ApplicationEngine {
  constructor() {
    this.foodAPIConnection = new FoodNetwork();
    this.window = new Window();
  }

  start = () => {
    this.fetchFoodItems();
  }

  fetchFoodItems = () => {
    const res = this.foodAPIConnection.fetchAllCategories();
    res.then((data) => {
      const categoryList = data.meals;
      const rand = Math.floor(Math.random() * categoryList.length);
      const promiseRes = this.foodAPIConnection.getItemsByCategory(categoryList[rand].strCategory);
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
    const res = this.foodAPIConnection.getItemByID(id);
    res.then((data) => {
      this.window.displayItem(data.meals);
    })
      .catch((error) => {
        throw error;
      });
  }
}
export default ApplicationEngine;