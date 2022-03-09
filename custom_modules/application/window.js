class Window {
  constructor() {
    this.itemList = document.querySelector('.meal-content');
    this.itemCounter = document.querySelector('.item-count');
    this.loaders = document.querySelectorAll('.loading');

    // modal
    this.itemName = document.querySelector('.item-name');
    this.itemCategoryModal = document.querySelector('.modal-item-category');
    this.itemAreaModal = document.querySelector('.modal-item-area');
    this.itemVideoModal = document.querySelector('.modal-item-video');
    this.itemDescription = document.querySelector('.modal-item-description');
  }

  displayItems = (items, likes) => {
    this.itemCounter.innerHTML = items.length;
    let domContent = '';
    items.forEach((item) => {
      const filtered = likes.filter((like) => {
        const likeState = like.item_id === item.idMeal;
        return likeState;
      });

      let likeCount = 0;
      if (filtered.length > 0) {
        likeCount = filtered[0].likes;
      }

      domContent = `${domContent}<li class="item">
      <img class="full-view zoom"
        src=${item.strMealThumb}
        alt=${item.strMeal}
      />
      <section class="caption">
        <h2 class="d-flex">
        ${item.strMeal}<span class="item-likes">&nbsp; <i class="fa-solid fa-heart red-heart"></i>&nbsp;<i class="heart-counter">${likeCount}</i></span>
        </h2>
        <span class="view-comments"
          ><i class="fa-solid fa-comments blue-comment"></i> Comment</span
        >
      </section>
    </li>`;
    });
    this.itemList.innerHTML = domContent;
    this.hideLoader();
  }

  displayItem = (item) => {
    this.itemName.innerHTML = `Name: ${item.strMeal}`;
    this.itemCategoryModal.innerHTML = `Category: <span class="green-text animate__animated animate__bounceInLeft">${item.strCategory}</span>`;
    this.itemAreaModal.innerHTML = `Area: <span class="red-text animate__animated animate__bounceInLeft"> ${item.strArea} </span>`;
    const videoUrl = item.strYoutube.split('=');
    const ID = videoUrl.pop();
    this.itemVideoModal.src = `https://www.youtube.com/embed/${ID}?autoplay=0&loop=1&mute=1&playlist=${ID}`;
    this.itemDescription.innerHTML = item.strInstructions;
    this.hideLoader();
  }

  showLoader = () => {
    this.loaders.forEach((loader) => {
      loader.classList.remove('hide');
      loader.classList.add('show');
    });
  }

  hideLoader = () => {
    this.loaders.forEach((loader) => {
      loader.classList.remove('show');
      loader.classList.add('hide');
    });
  }

  updateDisplay = (items, likes) => {
    const allHearts = this.likeCounterAction();
    allHearts.forEach((heart, index) => {
      const filtered = likes.filter((like) => {
        const likeState = like.item_id === items[index].idMeal;
        return likeState;
      });

      let likeCount = 0;
      if (filtered.length > 0) {
        likeCount = filtered[0].likes;
        heart.innerHTML = likeCount;
      }
    });
  }

  openModalAction = () => document.querySelector('#the-modal');

  closeModalAction = () => document.querySelector('#modal-closer');

  commentsButtonAction = () => document.querySelectorAll('.view-comments');

  fullViewImageAction = () => document.querySelectorAll('.full-view');

  modalContentAction = () => document.querySelector('.modal-content');

  likeItemAction = () => document.querySelectorAll('.item-likes');

  likeCounterAction = () => document.querySelectorAll('.heart-counter');
}
export default Window;