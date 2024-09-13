import {BasketStorage, ProductStorage} from "../storage";
import Swiper from "swiper";

export default async function menu(pb) {
    let products = ProductStorage.get()
    if (!products) {
        products = await pb.collection('menu').getFullList();
        ProductStorage.set(products);
    }

    document.getElementById('menu').innerHTML = '';
    document.getElementById('category-slider-items').innerHTML = '';

    let lastCategory = '';

    for (let product of products) {
        if (lastCategory !== product.category_id) {
            const categoryImage = pb.files.getUrl(product, product.category_image);
            document.getElementById('category-slider-items').innerHTML += `
             <button onclick="smoothScroll(document.getElementById('category-${product.category_id}'))"
                class="flex-shrink-0 p-2 rounded-lg text-sm font-semibold text-gray-700 swiper-slide">
                        <img src="${categoryImage ? categoryImage : 'https://placehold.co/50x50'}" alt="${product.category_name}" class="w-24 h-14 mx-auto mb-1"/>
                        ${product.category_name}
                    </button>`;

            let categoryHtml = `
            <div id="category-${product.category_id}">
                <h2 class="text-xl font-semibold mb-2">${product.category_name}</h2>
                <div id="product-row"><!-- Product Here --></div>`;

            if (lastCategory === '') {
                categoryHtml = '</div>' + categoryHtml;
            }

            lastCategory = product.category_id;

            document.getElementById('menu').innerHTML += categoryHtml;
        }

        let currentProductQuantity = BasketStorage.getItemQuantity(product.product_id);

        const image = pb.files.getUrl(product, product.product_image);
        let itemRow = `
                <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between m-2">
                    <img src="${image ? image : 'https://placehold.co/100x100'}" alt="${product.product_name}" class="w-24 h-24 min-w-24 min-h-24 rounded-md" />
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">
                            <a href="/product/?${product.product_slug}">${product.product_name}</a>
                        </h3>
                        <div class="text-gray-600 text-sm">
                            ${product.product_description}
                        </div>
                    </div>
                    <div class="w-1/4"></div>
                    <div class="w-1/4"></div>
                    <div class="flex items-center" id="product-${product.product_id}">
                        <span class="text-lg font-semibold mr-2">${product.product_price}₺</span>
                        <button class="text-gray-500 hover:text-red-600 decrease-button ${currentProductQuantity > 0 ? '' : 'hidden'}" 
                                onclick="decreaseQuantity('${product.product_id}')">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <input type="number" readonly 
                            value="${currentProductQuantity}" 
                            class="w-12 mx-2 text-center border border-gray-300 rounded quantity-input focus:outline-none ${currentProductQuantity > 0 ? '' : 'hidden'}"
                            />
                        <button class="text-gray-500 hover:text-red-600 increase-button" onclick="increaseQuantity('${product.product_id}')">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                    </div>
                </div>
        `;

        document.getElementById('menu').innerHTML += itemRow;
    }

    // Add Swiper after all products are added
    new Swiper(".slider", {
        loop: true,
        slidesPerView: 3,
        // centeredSlides: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    window.increaseQuantity = function (productId) {
        const elem = document.getElementById('product-' + productId).querySelector('.quantity-input');
        if (elem.value * 1 < 30) {
            elem.value++;
        }

        setVisibility(productId);
        BasketStorage.set(productId, elem.value);
    }

    window.decreaseQuantity = function (productId) {
        const elem = document.getElementById('product-' + productId).querySelector('.quantity-input');
        if (elem.value * 1 > 0) {
            elem.value--;
        }

        setVisibility(productId);
        BasketStorage.set(productId, elem.value);
    }

    function setVisibility(productId) {
        const elem = document.getElementById('product-' + productId).querySelector('.quantity-input');
        if (elem.value * 1 > 0) {
            document.getElementById('product-' + productId).querySelector('.decrease-button').style.display = 'block';
            document.getElementById('product-' + productId).querySelector('.quantity-input').style.display = 'block';
        } else {
            document.getElementById('product-' + productId).querySelector('.decrease-button').style.display = 'none';
            document.getElementById('product-' + productId).querySelector('.quantity-input').style.display = 'none';
        }
    }
}