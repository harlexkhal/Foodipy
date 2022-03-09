import FoodNetwork from '../gateway/food.js';
import InteractionGateway from '../gateway/interaction.js';
import Window from './window.js';

class ApplicationEngine {
  constructor() {
    this.appID = 'LWKqOYwzRz4RLPAnwcTk';
    this.foodAPIConnection = new FoodNetwork();
    this.involvmentConnection = new InteractionGateway(this.appID);

    this.window = new Window();
    this.items = [];
    this.currCategory = '';
  }

  start = () => {
    this.fetchFoodItems();
  }

  fetchFoodItems = () => {
    const res = this.foodAPIConnection.fetchAllCategories();
    res.then((data) => {
      const categoryList = data.meals;
      const rand = Math.floor(Math.random() * categoryList.length);
      this.currCategory = categoryList[rand].strCategory;
      const promiseRes = this.foodAPIConnection.getItemsByCategory(this.currCategory);
      promiseRes.then((data) => {
        const iRes = this.involvmentConnection.getLIkes();
        iRes.then((likes) => {
          this.items = data.meals;
          this.window.displayItems(this.items, likes);
          this.#bindEvents();
        })
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

  addLikeToItem = (id) => {
    this.involvmentConnection.addLike(id);
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
        refEvent.ref.FetchFoodItemByID(refEvent.ref.items[refEvent.index].idMeal);
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
        refEvent.ref.FetchFoodItemByID(refEvent.ref.items[refEvent.index].idMeal);
      });
      viewSpan.ref = this;
      viewSpan.index = i;
    });

    const itemsLike = this.window.likeItemAction();
    itemsLike.forEach((itemLike, i) => {
      itemLike.addEventListener('click', (event) => {
        const refEvent = event.currentTarget;
        refEvent.thisRef.classList.add('animate__animated');
        refEvent.thisRef.classList.add('animate__rubberBand');
        setTimeout(() => {
          refEvent.thisRef.classList.remove('animate__animated');
          refEvent.thisRef.classList.remove('animate__rubberBand');
        }, 800, refEvent);
        refEvent.classRef.addLikeToItem(refEvent.classRef.items[refEvent.index].idMeal)
      });
      itemLike.thisRef = itemLike;
      itemLike.classRef = this;
      itemLike.index = i;
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

    const winRef = this.window;
    const interval = setInterval(() => {
      const promiseRes = this.foodAPIConnection.getItemsByCategory(this.currCategory);
      promiseRes.then((data) => {
        const iRes = this.involvmentConnection.getLIkes();
        iRes.then((likes) => {
          this.items = data.meals;
          winRef.updateDisplay(this.items, likes);
        })
      })
        .catch((error) => {
          throw error;
        });
    }, 300, winRef);
  }
}
export default ApplicationEngine;