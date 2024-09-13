import {BasketStorage} from "../storage";

window.basketUpdated = function (basket) {
    if (!document.getElementById('basket_quantity')) {
        return;
    }

    let quantity = 0;
    for (let productId in basket) {
        quantity += basket[productId] * 1;
    }

    if (quantity > 99) {
        quantity = '99+';
    }

    document.getElementById('basket_quantity').innerText = quantity;

    if (quantity > 0) {
        document.getElementById('basket_quantity').classList.remove('hidden');
    } else {
        document.getElementById('basket_quantity').classList.add('hidden');
    }
};

// Run on page load
window.basketUpdated(BasketStorage.get());