import Window from '../custom_modules/application/window';

describe('Food Items', () => {
  test('Count Items', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul class="meal-content"></ul>' +
      '<span class="item-count"></span>' +
    '</div>';
    
    const itemList = [
      {
        strMeal: "Beef and Mustard Pie",
        strMealThumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        idMeal: "52874"
      },
      {
        strMeal: "Beef and Oyster pie",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
        idMeal: "52878"
      },
      {
        strMeal: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
        strMealThumb: "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
        idMeal: "52997"
      },
      {
        strMeal: "Beef Bourguignon",
        strMealThumb: "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        idMeal: "52904"
      },
      {
        strMeal: "Beef Bourguignon",
        strMealThumb: "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        idMeal: "52904"
      }
    ];

    const ItemLikesCounter = [
      {
        "likes": 8,
        "item_id": "52878"
      },
      {
        "likes": 12,
        "item_id": "52874"
      },
      {
        "likes": 1,
        "item_id": "52904"
      },
      {
        "likes": 3,
        "item_id": "52904"
      },
      {
        "likes": 2,
        "item_id": "52997"
      }
    ]
    const app = new Window();
    app.displayItems(itemList, ItemLikesCounter);
    
    const list = document.querySelectorAll('.meal-content li');
    expect(list).toHaveLength(5);
  });
});

describe('Comments', () => {
  test('Count Comments', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul class="user-comments"></ul>' +
      '<span class="comment-count-info"></span>' +
    '</div>';
    
    const comments = [
      {
        "username": "Alexander Ibeh",
        "comment": "very yummy",
        "creation_date": "2022-03-09"
      },
      {
        "username": "Richard",
        "creation_date": "2022-03-09",
        "comment": "This tastes really good"
      },
      {
        "comment": "This tastes really good",
        "username": "Richard",
        "creation_date": "2022-03-09"
      }
    ];

    const app = new Window();
    app.displayItemComments(comments);
    
    const list = document.querySelectorAll('.user-comments li');
    expect(list).toHaveLength(3);
  });
});