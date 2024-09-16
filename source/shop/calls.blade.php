@extends('_layouts.main')

@section('body')
    @include('_components.shop_header')
    <!-- Header -->
    <div class="text-center mt-10">
        <h2 class="text-2xl font-semibold text-red-500 mb-6 mt-1">Garson Çağrı Takip Ekranı</h2>
    </div>

    <!-- Calls Table -->
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border rounded-lg mb-10" id="shop_calls_table">
            <thead>
            <tr>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Masa Numarası</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">Çağrı Zamanı</th>
                <th class="py-3 px-6 text-left text-gray-700 font-bold border-b">İşlem</th>
            </tr>
            </thead>
            <tbody>
                <!-- Call rows here -->
            </tbody>
        </table>
    </div>

    <audio id="new_call_sound" preload="auto" class="hidden">
        <source src="/assets/ding.mp3" type="audio/mp3">
    </audio>
@endsection