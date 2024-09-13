<!-- Quantity Selector -->
<div class="flex items-center mt-4 product-quantity-wrapper" data-product-id="">
    <button class="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none" onclick="decreaseProductQuantity(this.parentElement)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
        </svg>
    </button>
    <span class="mx-4 text-lg product_quantity"></span>
    <button class="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none" onclick="increaseProductQuantity(this.parentElement)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12M12 6v12"></path>
        </svg>
    </button>
</div>
