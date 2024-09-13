import {BasketStorage} from "../storage";

export default async function checkout(pb) {
    let basket = BasketStorage.getItemsHasQuantity();

    // Basket Empty
    if (Object.keys(basket).length === 0) {
        document.getElementById('checkout_go_back').classList.remove('hidden');
        document.getElementById('checkout_items').innerHTML += `
            <div class="flex justify-between items-center py-2 border-t">
                <p class="text-gray-800">Sepetiniz boş</p>
                <p class="text-gray-600">0₺</p>
            </div>`;

        return;
    }


    document.getElementById('checkout_complete_payment').classList.remove('hidden');

    const products = await pb.collection('products').getFullList({
        fields: 'id, name, price',
        sort: 'name',
        filter: Object.keys(basket).map(id => `id = '${id}'`).join(' || '),
    });

    window.products = products;

    let total = 0;
    for (let product of products) {
        total += product.price * (basket[product.id] * 1);

        document.getElementById('checkout_items').innerHTML += `
            <div class="flex justify-between items-center py-2 border-t product-row" data-product-id="${product.id}">
                <p class="text-gray-800">${product.name}</p>      
                   <div class="flex items-center product-quantity-wrapper" data-product-id="${product.id}">
                        <span class="text-md text-gray-600 mr-2 price-text">${product.price * basket[product.id]}₺</span>
                        <button class="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none" onclick="decreaseProductQuantity(this.parentElement)">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
                            </svg>
                        </button>
                        <span class="mx-4 text-lg product_quantity">${basket[product.id]}</span>
                        <button class="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none" onclick="increaseProductQuantity(this.parentElement)">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12M12 6v12"></path>
                            </svg>
                        </button>
                    </div>
            </div>`;
    }

    document.getElementById('checkout_items').innerHTML += `
            <div class="flex justify-between items-center mt-4 border-t pt-2" id="checkout_total">
                <p class="text-lg font-bold">Toplam</p>
                <p class="text-lg font-bold text-red-600" id="checkout_total_price">${total}₺</p>
            </div>`

};


function calculateTotalPrice() {
    let total = 0;
    for (let product of window.products) {
        total += product.price * BasketStorage.getItemQuantity(product.id);
    }

    document.getElementById('checkout_total_price').innerText = total + '₺';

    if (total === 0) {
        document.getElementById('checkout_go_back').classList.remove('hidden');
        document.getElementById('checkout_complete_payment').classList.add('hidden');
    }
}

window.quantityChanged = function (productId) {
    const priceElem = document.querySelector('.product-quantity-wrapper[data-product-id="' + productId + '"] .price-text');
    const quantity = BasketStorage.getItemQuantity(productId);
    if (priceElem) {
        window.products.forEach(product => {
            if (product.id === productId) {
                priceElem.innerText = (product.price * quantity) + '₺';
            }
        });
    }

    if (quantity === 0) {
        document.querySelector('.product-row[data-product-id="' + productId + '"]').remove();
    }

    calculateTotalPrice();
};