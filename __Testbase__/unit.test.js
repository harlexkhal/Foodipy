import Window from '../custom_modules/application/window';

describe('Food Items', () => {
    test('Count Items', () => {
        document.body.innerHTML =
        '<div>' +
        '  <ul class="meal-content"></ul>' +
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

        const window = new Window();
        window.displayItems(itemList);
        
        const list = document.querySelectorAll('.meal-content li');
        expect(list).toHaveLength(5);
    });
});