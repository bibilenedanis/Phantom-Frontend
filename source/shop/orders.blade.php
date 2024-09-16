@extends('_layouts.main')

@section('body')
    @include('_components.shop_header')

    <!-- Header -->
    <div class="text-center mt-10">
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
@endsection