import {BasketStorage} from "../storage";

/**
 * @param elem should be parent wrapper element
 */
window.increaseProductQuantity = function (elem) {
    let productId = elem.getAttribute('data-product-id');
    if (!productId) {
        console.log('cannot get product id')
        return;
    }
    BasketStorage.set(productId, BasketStorage.getItemQuantity(productId) + 1);

    elem.querySelector('span.product_quantity').innerText = BasketStorage.getItemQuantity(productId);

    if (typeof window.quantityChanged === "function") {
        window.quantityChanged(productId);
    }
}

/**
 * @param elem should be parent wrapper element
 */
window.decreaseProductQuantity = function (elem) {
    let productId = elem.getAttribute('data-product-id');
    if (!productId) {
        console.log('cannot get product id')
        return;
    }
    BasketStorage.set(productId, BasketStorage.getItemQuantity(productId) - 1);

    elem.querySelector('span.product_quantity').innerText = BasketStorage.getItemQuantity(productId);

    if (typeof window.quantityChanged === "function") {
        window.quantityChanged(productId);
    }
}