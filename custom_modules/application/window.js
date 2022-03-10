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
    this.itemComments = document.querySelector('.user-comments');
    this.itemCommentsCounter = document.querySelector('.comment-count-info');
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

  displayItem = (item, comments) => {
    this.itemName.innerHTML = `Name: ${item.strMeal}`;
    this.itemCategoryModal.innerHTML = `Category: <span class="green-text animate__animated animate__bounceInLeft">${item.strCategory}</span>`;
    this.itemAreaModal.innerHTML = `Area: <span class="red-text animate__animated animate__bounceInLeft"> ${item.strArea} </span>`;
    const videoUrl = item.strYoutube.split('=');
    const ID = videoUrl.pop();
    this.itemVideoModal.src = `https://www.youtube.com/embed/${ID}?autoplay=0&loop=1&mute=1&playlist=${ID}`;
    this.itemDescription.innerHTML = item.strInstructions;
    this.itemCommentsCounter.innerHTML = 'Comments (0)';

    this.displayItemComments(comments);
    this.hideLoader();
  }

  displayItemComments = (comments) => {
    let domContent = '';
    if (comments.length <= 0) {
      domContent = '<li class="comment red-text">No comments yet, be the first 😉</li>';
    }
    comments.forEach((comment) => {
      domContent = `${domContent}<li class="comment"><i>${comment.creation_date}: </i> <span class="red-text">${comment.username}:</span> <span class="green-text">${comment.comment}</span></li>`;
    });
    this.itemComments.innerHTML = domContent;
    this.itemCommentsCounter.innerHTML = `Comments (${comments.length})`;
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

  commentformAction = () => document.querySelector('.comment-form');

  commentformNameInputAction = () => document.querySelector('.username');

  commentformBodyInputAction = () => document.querySelector('.comment-body');

  closeModalAction = () => document.querySelector('#modal-closer');

  commentsButtonAction = () => document.querySelectorAll('.view-comments');

  fullViewImageAction = () => document.querySelectorAll('.full-view');

  modalContentAction = () => document.querySelector('.modal-content');

  likeItemAction = () => document.querySelectorAll('.item-likes');

  likeCounterAction = () => document.querySelectorAll('.heart-counter');

  commentsListAction = () => this.itemComments;
}
export default Window;