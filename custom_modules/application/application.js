import FoodNetwork from '../gateway/food.js';
import Window from './window.js';

class ApplicationEngine {
  constructor() {
    this.appID = '67oBuyY7KZB5pSttCJfs';
    this.foodAPIConnection = new FoodNetwork();
    this.window = new Window();
    this.items = [];
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
        this.items = data.meals;
        this.window.displayItems(this.items);
        this.#bindEvents();
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
    this.window.showLoader();
    const res = this.foodAPIConnection.getItemByID(id);
    res.then((data) => {
      this.window.displayItem(data.meals[0]);
    })
      .catch((error) => {
        throw error;
      });
  }

  #bindEvents = () => {
    const modal = this.window.openModalAction();
    const modalCloser = this.window.closeModalAction();
    modalCloser.addEventListener('click', () => {
      modal.classList.remove('d-block');
      modal.classList.add('d-none');
    });

    const commentSpans = this.window.commentsButtonAction();
    commentSpans.forEach((span, i) => {
      span.addEventListener('click', (event) => {
        const refEvent = event.currentTarget;
        modal.classList.remove('d-none');
        modal.classList.add('d-block');
        refEvent.ref.FetchFoodItemByID(refEvent.ref.Items[refEvent.index].idMeal);
      });
      span.ref = this;
      span.index = i;
    });

    const viewSpans = this.window.fullViewImageAction();
    viewSpans.forEach((viewSpan, i) => {
      viewSpan.addEventListener('click', (event) => {
        const refEvent = event.currentTarget;
        modal.classList.remove('d-none');
        modal.classList.add('d-block');
        refEvent.ref.FetchFoodItemByID(refEvent.ref.Items[refEvent.index].idMeal);
      });
      viewSpan.ref = this;
      viewSpan.index = i;
    });

    const modalContent = this.window.modalContentAction();
    document.addEventListener('click', (event) => {
      const isClickInsideElementModal = modalContent.contains(event.target);
      let isClickInsideModalOpener = false;

      for (let i = 0; i < viewSpans.length; i += 1) {
        const optionTwo = viewSpans[i].contains(event.target);
        const optionOne = commentSpans[i].contains(event.target);
        if (optionOne || optionTwo) {
          isClickInsideModalOpener = true;
          break;
        }
      }

      if (!isClickInsideElementModal && !isClickInsideModalOpener) {
        modal.classList.remove('d-block');
        modal.classList.add('d-none');
      }
    });
  }
}
export default ApplicationEngine;