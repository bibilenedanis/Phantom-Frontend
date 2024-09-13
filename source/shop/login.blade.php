@extends('_layouts.main')

@section('body')
    <style>
        #footer {
            display: none;
        }
    </style>

    <!-- Login Card -->
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto w-full my-5">
        <!-- Header -->
        <h2 class="text-center text-2xl font-semibold text-red-500 mb-6" id="shop_name"></h2>

        <!-- Form -->
        <form id="login_form">
            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" placeholder="Email adresinizi girin"
                       class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            </div>

            <!-- Password Input -->
            <div class="mb-6">
                <label for="password" class="block text-gray-700 font-medium mb-2">Şifre</label>
                <input type="password" id="password" placeholder="Şifrenizi girin"
                       class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            </div>

            <!-- Login Button -->
            <button type="submit" id="login_form_action_button"
                    class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                Giriş Yap
            </button>
        </form>
    </div>

@endsection