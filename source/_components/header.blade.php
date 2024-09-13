<div class="bg-white p-4 flex items-center justify-between border-b border-gray-200 fixed top-0 z-50 left-0 w-full">
    <a href="{{ $backurl ?? '/' }}" class="text-gray-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
    </a>
    <div class="text-center">
        <h1 id="shop_name" class="text-lg font-semibold text-red-600"></h1>
        <div class="hidden" id="order-preparing-text">
            <h4 class="text-sm font-semibold text-red-600">Siparişiniz hazırlanıyor</h4>
        </div>
    </div>
    @if(!in_array($page->getPath(), ['/checkout', '/payment']))
        <a href="/checkout" class="text-gray-500 relative" title="Sepet">
            <span
                    id="basket_quantity"
                    style="font-size: 0.6rem; line-height: 1.5rem; width: 1.5rem; height: 1.5rem; top: -0.5rem; right: -0.5rem;"
                    class="absolute top-0 right-0 inline-block w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full text-center leading-6 hidden">
            <!-- Basket Item Count Here -->
            </span>
            <svg class="w-8 h-8" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M952.32 419.84H756.736L564.224 210.944l-4.096-4.096c-29.696-26.624-73.728-24.576-101.376 4.096L267.264 419.84H71.68c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48h55.296l89.088 355.328C225.28 847.872 253.952 870.4 286.72 870.4h452.608c32.768 0 61.44-22.528 69.632-54.272L897.024 460.8H952.32c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48zM488.448 239.616c12.288-13.312 30.72-13.312 43.008-3.072L700.416 419.84H323.584l164.864-180.224z m281.6 566.272c-4.096 14.336-16.384 23.552-30.72 23.552H286.72c-14.336 0-26.624-10.24-30.72-23.552L169.984 460.8h684.032l-83.968 345.088zM645.12 645.12c0 11.264-9.216 20.48-20.48 20.48H399.36c-11.264 0-20.48-9.216-20.48-20.48s9.216-20.48 20.48-20.48h225.28c11.264 0 20.48 9.216 20.48 20.48z"/>
            </svg>
        </a>
    @endif
</div>

<div class="h-20"></div>