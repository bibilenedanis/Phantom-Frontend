@extends('_layouts.main')

@section('body')

    <div class="relative">
        <img src="" id="shop_cover_image" alt="Shop Image" class="w-full h-96 object-cover hidden"/>
        <div id="shop_cover_image_loader" class="flex items-center justify-center w-full h-96 bg-gray-300 rounded dark:bg-gray-700 animate-pulse">
            <svg class="w-48 h-48 text-gray-200 dark:text-gray-600" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>

        <!-- Back button -->
        <div class="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hidden">
            <button class="text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
        </div>
        <div id="shop_name" class="absolute bottom-4 left-8 text-white text-2xl font-semibold">
            <!-- Shop Name Here -->
        </div>
    </div>

    <!-- Info Section -->
    <div class="p-6">
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-2xl font-semibold mb-2" id="shop_district">
                    <!-- Shop Name Here -->  <!-- Shop District Here -->
                </h2>
                <div class="text-gray-600" id="shop_description">
                    <!-- Shop Description Here -->
                </div>
            </div>
            <img id="shop_logo" src="https://placehold.co/100x100" alt="Falan Lounge Logo" class="rounded-full shadow-lg" style="max-width: 80px;"/>
        </div>
    </div>

    <!-- Menu Section -->
    <div class="text-center py-4">
        <a href="/menu" class="bg-red-600 text-white px-8 py-2 rounded-full font-semibold text-lg">
            MENÜYE GİT
        </a>
    </div>

    <!-- Actions Section -->
    <div class="grid grid-cols-3 gap-4 p-6 hidden">
        <button class="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md">
            <div class="text-4xl text-gray-600 mb-2">✋</div>
            <span>Garson Çağır</span>
        </button>
        <button class="flex flex-col items-center bg-red-500 p-4 rounded-lg shadow-md text-white">
            <div class="text-4xl mb-2">🔍</div>
            <span>QR kodu okut</span>
        </button>
        <button class="flex flex-col items-center bg-red-500 p-4 rounded-lg shadow-md text-white">
            <div class="text-4xl mb-2">🧾</div>
            <span>Hesap iste</span>
        </button>
        <button class="flex flex-col items-center bg-red-500 p-4 rounded-lg shadow-md text-white">
            <div class="text-4xl mb-2">⭐</div>
            <span>Değerlendir</span>
        </button>
        <button class="flex flex-col items-center bg-red-500 p-4 rounded-lg shadow-md text-white">
            <div class="text-4xl mb-2">🍽</div>
            <span>Siparişlerim</span>
        </button>
        <a href="/checkout" class="flex flex-col items-center bg-red-500 p-4 rounded-lg shadow-md text-white">
            <div class="text-4xl mb-2">💳</div>
            <span>Online Öde</span>
        </a>
    </div>
    <div class="h-24"></div>
@endsection
