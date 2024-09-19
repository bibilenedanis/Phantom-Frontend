@extends('_layouts.main')

@section('body')
    @include('_components.shop_header')

    <!-- Header -->
    <div class="text-center">
        <h2 class="text-2xl font-semibold text-red-500 mb-6 mt-1">Sipariş Takip Ekranı</h2>
    </div>

    <!-- Order Table -->
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border rounded-lg mb-10" id="shop_orders_table">
            <thead>
            <tr>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Masa Numarası</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Sipariş İçeriği</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Sipariş Notu</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Durum</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Sipariş Zamanı</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">İşlem</th>
            </tr>
            </thead>
            <tbody>
                <!-- Order rows here -->
            </tbody>
        </table>
    </div>

    <audio id="new_order_sound" preload="auto" class="hidden">
        <source src="/assets/ding.mp3" type="audio/mp3">
    </audio>

    <audio id="new_call_waitress_sound" preload="auto" class="hidden">
        <source src="/assets/call-waitress.mp3" type="audio/mp3">
    </audio>

    <!-- Modal -->
    <div id="call-waitress-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-lg p-8 text-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <h2 class="text-2xl mb-4">Masa Çağırıyor</h2>
            <div id="calling-tables">
                <!-- Calling tables here -->
            </div>
            <button
                    id="close-call-waitress-modal"
                    onclick="document.getElementById('call-waitress-modal').classList.add('hidden');"
                    class="bg-red-600 text-white px-4 py-2 rounded">
                Tamam
            </button>
        </div>
    </div>
@endsection