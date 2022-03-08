class Window {
  constructor() {
    this.ItemList = document.querySelector('.meal-content');

    // modal
    this.ItemCategoryModal = document.querySelector('.modal-item-category');
    this.ItemAreaModal = document.querySelector('.modal-item-area');
    this.ItemVideoModal = document.querySelector('.modal-item-video');
    this.ItemDescription = document.querySelector('.modal-item-description');
  }

  displayItems = (items) => {
    let domContent = '';
    items.forEach((item) => {
      domContent = `${domContent}<li>${item.strMeal}</li>`;
    });
    this.ItemList.innerHTML = domContent;
  }

  displayItem = (item) => {
    this.ItemCategoryModal.innerHTML = item.strCategory;
    this.ItemAreaModal.innerHTML = item.strArea;
    this.ItemVideoModal.src = item.strYoutube;
    this.ItemDescription.innerHTML = item.strInstructions;
  }
}
export default Window;