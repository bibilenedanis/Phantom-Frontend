@extends('_layouts.main')

@section('body')
    <audio id="new_order_sound" preload="auto" class="hidden">
        <source src="/assets/ding.mp3" type="audio/mp3">
    </audio>

    <style>
        #footer {
            display: none;
        }

        body {
            max-width: 1280px !important;
            margin: 0 auto;
        }
    </style>

    <!-- Header -->
    <h2 class="text-2xl font-semibold text-red-500 mb-6 mt-1">Sipariş Takip Ekranı</h2>

    <!-- Order Table -->
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border rounded-lg mb-10" id="shop_orders_table">
            <thead>
            <tr>
{{--                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Masa Numarası</th>--}}
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
@endsection