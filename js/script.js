let itemFood;
let itemDrink;
let itemDessert;

function selectFood(food) {
    const selectedFood = document.querySelector('.options-food .selected');

    if (selectedFood !== null) {
        selectedFood.classList.remove('selected');
    }

    food.classList.add('selected');

    const nameFood = document.querySelector('.options-food .selected .item-name h5');

    itemFood = nameFood.innerHTML;

    enableFinalization();
}


function selectDrink(drink) {
    const selectedDrink = document.querySelector('.options-drink .selected');

    if (selectedDrink !== null) {
        selectedDrink.classList.remove('selected');
    }

    drink.classList.add('selected');

    const nameDrink = document.querySelector('.options-drink .selected .item-name h5');

    itemDrink = nameDrink.innerHTML;

    enableFinalization();
}

function selectDessert(dessert) {
    const selectedDessert = document.querySelector('.options-dessert .selected');

    if (selectedDessert !== null) {
        selectedDessert.classList.remove('selected');
    }

    dessert.classList.add('selected');

    const nameDessert = document.querySelector('.options-dessert .selected .item-name h5');

    itemDessert = nameDessert.innerHTML;


    enableFinalization();
}

function enableFinalization() {
    if (itemFood !== undefined) {
        if (itemDrink !== undefined) {
            if (itemDessert !== undefined) {
                const confirmOrder = document.querySelector('.bottom');
                confirmOrder.classList.add('finish');
            }
        }
    }
}

