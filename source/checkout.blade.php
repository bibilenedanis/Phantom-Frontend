@extends('_layouts.main')

@section('body')
    @include('_components.header', ['backurl' => '/menu'])

    <main class="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg p-6 mb-4">
        <!-- Order Summary -->
        <section class="border-b pb-4 mb-4" id="checkout_items">
            <h2 class="text-xl font-semibold mb-2">Sipariş Özeti</h2>
           <!-- Items Here -->
        </section>

        <!-- Checkout Button -->
        <div class="flex justify-end">
            <a href="/payment" id="checkout_complete_payment" class="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 hidden">
                Ödemeyi Tamamla
            </a>
            <a href="/menu" id="checkout_go_back" class="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 hidden">
                Menüye Dön
            </a>
        </div>
    </main>

    <div class="h-24"></div>
@endsection
