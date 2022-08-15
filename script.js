let itemFood;
let itemDrink;
let itemDessert;
let priceFood;
let priceDrink;
let priceDessert;
let total;
let client;
let address;

function selectFood(food) {
    const selectedFood = document.querySelector('.options-food .selected');

    if (selectedFood !== null) {
        selectedFood.classList.remove('selected');
    }

    food.classList.add('selected');

    const nameFood = document.querySelector('.options-food .selected .item-name h5');

    itemFood = nameFood.innerHTML;

    const price = document.querySelector('.options-food .selected .item-price span');
  
    priceFood = Number(price.innerHTML.replaceAll(',', '.'));

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

    const price = document.querySelector('.options-drink .selected .item-price span');
  
    priceDrink = Number(price.innerHTML.replaceAll(',', '.'));

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

    const price = document.querySelector('.options-dessert .selected .item-price span');
  
    priceDessert = Number(price.innerHTML.replaceAll(',', '.'));


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

function closeOrder() {
    client = prompt("Insira seu nome:");

    address = prompt("insira o endereço de entrega:")

    total = (priceFood + priceDrink + priceDessert).toFixed(2);
    totalorder = (total.replaceAll('.', ','));

    const priceFoodOrder = ((priceFood.toFixed(2)).replaceAll('.', ','));

    const priceDrinkOrder = ((priceDrink.toFixed(2)).replaceAll('.', ','));

    const priceDessertOrder = ((priceDessert.toFixed(2)).replaceAll('.', ','));

    const foodList = document.querySelector('.food-list');
    foodList.innerHTML = `${itemFood}`;

    const foodPrice = document.querySelector('.food-price');
    foodPrice.innerHTML = `R$ ${priceFoodOrder}`;

    const drinkList = document.querySelector('.drink-list');
    drinkList.innerHTML = `${itemDrink}`;

    const drinkPrice = document.querySelector('.drink-price');
    drinkPrice.innerHTML = `R$ ${priceDrinkOrder}`;

    const dessertList = document.querySelector('.dessert-list');
    dessertList.innerHTML = `${itemDessert}`;

    const dessertPrice = document.querySelector('.dessert-price');
    dessertPrice.innerHTML = `R$ ${priceDessertOrder}`;

    const totalPrice = document.querySelector('.total-price');
    totalPrice.innerHTML = `R$ ${totalorder}`;

    let unhide = document.querySelector('.confirmBackground');
    unhide.classList.remove('hidden');
}


function cancel() {
    let occult = document.querySelector('.confirmBackground');
    occult.classList.add('hidden');
}

function sendOrder() {
    total = (priceFood + priceDrink + priceDessert).toFixed(2);

    let orderList = encodeURIComponent(`Olá, gostaria de fazer o pedido: 
    - Prato: ${itemFood}
    - Bebida: ${itemDrink} 
    - Sobremesa: ${itemDessert} 
    Total: R$ ${total}
    
    Nome: ${client}
    Endereço: ${address}`);

    let whatsappLink = "https://wa.me/?text=" + orderList;

    window.open(whatsappLink, '_blank').focus();
}

