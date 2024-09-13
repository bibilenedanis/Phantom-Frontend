@extends('_layouts.main')

@section('body')
    @include('_components.header', ['backurl' => '/menu'])

    <main class="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg">
        <div class="relative">
            <img src="" alt="Product Image" class="w-full rounded-t-lg hidden" id="product_image"/>

            <div class="animate-pulse" id="product_image_loader">
                <div class="flex items-center justify-center w-full h-96 bg-gray-300 rounded">
                    <svg class="w-48 h-48 text-gray-200 dark:text-gray-600" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Product Details -->
        <section class="p-4 my-5">
            <h2 class="text-2xl font-bold mb-2" id="product_name"><!-- Product name here --></h2>
            <p class="text-gray-700 text-sm" id="product_description">
                <!-- Product Description Here -->
            </p>
            <p class="mt-4 text-xl font-semibold text-red-600" id="product_price"></p>

            <!-- Quantity Selector -->
            @include('_components.quantity_selector')

            <!-- Add to Cart Button -->
            <button class="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" onclick="window.location = '/menu'">
                Sepete Ekle
            </button>
        </section>
    </main>
@endsection
