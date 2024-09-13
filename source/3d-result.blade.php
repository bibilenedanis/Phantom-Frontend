@extends('_layouts.main')

@section('body')
    @include('_components.header', ['backurl' => '/menu'])

    <!-- Main Content -->
    <main class="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg p-6 mb-4">
        <!-- Payment Details -->
        <section class="m-6">
            <div class="flex justify-center items-center hidden" id="order-success">
                <svg class="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-lg font-semibold text-green-500 ml-4">Ödeme başarılı</p>
            </div>

            <div class="flex justify-center items-center hidden" id="order-fail">
                <svg class="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <p class="text-lg font-semibold text-red-500 ml-4">Ödeme başarısız</p>
            </div>

            <div class="text-center mx-auto hidden" id="order-fail-message">
                <p id="order-fail-message"></p>
            </div>
            <div class="text-center mx-auto mt-3 hidden" id="order-fail-go-button">
                <a href="/payment" class="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Ödeme sayfasına git
                </a>
            </div>

            <div class="mt-6">
                <p class="text-lg font-semibold">Ödeme Detayları</p>
                <div class="flex justify-between items-center mt-4">
                    <p class="text-gray-600">Ödeme Tutarı</p>
                    <p class="text-lg font-semibold text-red-600" id="3d-result-total"></p>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <p class="text-gray-600">Ödeme Tarihi</p>
                    <p class="text-lg font-semibold" id="3d-result-date"></p>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <p class="text-gray-600">Ödeme Saati</p>
                    <p class="text-lg font-semibold" id="3d-result-time"></p>
                </div>
            </div>

            <div class="text-center mx-auto mt-3 hidden" id="order-success-go-button">
                <a href="/" class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Anasayfaya dön
                </a>
            </div>
        </section>
    </main>

@endsection
