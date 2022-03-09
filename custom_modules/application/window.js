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

  displayItems = (items) => {
    this.itemCounter.innerHTML = items.length;
    let domContent = '';
    items.forEach((item) => {
      domContent = `${domContent}<li class="item">
      <img class="full-view zoom"
        src=${item.strMealThumb}
        alt=${item.strMeal}
      />
      <section class="caption">
        <h2 class="d-flex">
        ${item.strMeal}<span><i class="fa-solid fa-heart"></i>&nbsp; 5 likes</span>
        </h2>
        <span class="view-comments"
          ><i class="fa-solid fa-comments"></i>10 Comments</span
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

  openModalAction = () => document.querySelector('#the-modal');

  closeModalAction = () => document.querySelector('#modal-closer');

  commentsButtonAction = () => document.querySelectorAll('.view-comments');

  fullViewImageAction = () => document.querySelectorAll('.full-view');

  modalContentAction = () => document.querySelector('.modal-content');
}
export default Window;