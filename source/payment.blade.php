@extends('_layouts.main')

@section('body')
    @include('_components.header', ['backurl' => '/checkout'])

{{--    <div class="max-w-md mx-auto p-3 flex justify-between items-center mt-4 border-t bg-white" id="payment_total">--}}
{{--        <p class="text-lg font-bold">Toplam</p>--}}
{{--        <button onclick="fillPaymentForm()" class="bg-amber-500 rounded px-4 font-medium">Fill form</button>--}}
{{--        <p class="text-lg font-bold text-red-600" id="payment_total_price">1000₺</p>--}}
{{--    </div>--}}

    <!-- Main Content -->
    <main class="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg p-6 mb-4">
        <!-- Payment Details -->
        <section class="mb-6">
            <h2 class="text-xl font-semibold mb-4">Kredi Kartı Bilgileri</h2>
            <form id="payment_form">
                <!-- Card Number -->
                <div class="mb-4">
                    <label for="card-number" class="block text-gray-700 mb-1">Kart Numarası</label>
                    <input type="text" id="card-number" name="card-number" maxlength="16" minlength="16"
                           class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                           placeholder="1234567890123456" required>
                </div>
                <!-- Cardholder Name -->
                <div class="mb-4">
                    <label for="card-name" class="block text-gray-700 mb-1">Kart Üzerindeki İsim</label>
                    <input type="text" id="card-name" name="card-name"
                           class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                           placeholder="Ad Soyad" required>
                </div>
                <!-- Expiry Date -->
                <div class="mb-4 flex space-x-4">
                    <div class="flex-1">
                        <label for="expiry-month" class="block text-gray-700 mb-1">Son Kullanma Ayı</label>
                        <select id="expiry-month" name="expiry-month"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                                required>
                            <option value="" disabled selected>Ay</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div class="flex-1">
                        <label for="expiry-year" class="block text-gray-700 mb-1">Son Kullanma Yılı</label>
                        <select id="expiry-year" name="expiry-year"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                                required>
                            <option value="" disabled selected>Yıl</option>
                            <option value="24">2024</option>
                            <option value="25">2025</option>
                            <option value="26">2026</option>
                            <option value="27">2027</option>
                            <option value="28">2028</option>
                            <option value="29">2029</option>
                        </select>
                    </div>
                </div>
                <!-- CVV -->
                <div class="mb-4">
                    <label for="card-cvc" class="block text-gray-700 mb-1">CVV</label>
                    <input type="text" id="card-cvc" name="card-cvc" maxlength="3"
                           class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                           placeholder="123" required min="000" max="999">
                </div>

                <!-- Order Note -->
                <div class="mb-4">
                    <label for="order-note" class="block text-gray-700 mb-1">Sipariş Notu</label>
                    <textarea id="order-note" name="order-note" rows="3"
                              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                              placeholder="Siparişinizle ilgili notlarınızı buraya yazabilirsiniz"></textarea>
                </div>

                <!-- Payment Button -->
                <button type="submit"
                        class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Ödemeyi Tamamla
                </button>
            </form>
        </section>
    </main>

@endsection
