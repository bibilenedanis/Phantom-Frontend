<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">

    <link rel="canonical" href="{{ $page->getUrl() }}">
    <meta name="description" content="{{ $page->description }}">
    <title>{{ $page->title }}</title>
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <script defer src="{{ mix('js/main.js', 'assets/build') }}"></script>
</head>
<body class="text-gray-900 font-sans antialiased bg-gray-100 h-full" style="max-width: 800px; margin: 0 auto">

<div class="min-h-screen">
    @yield('body')
</div>

<!-- Footer -->
<footer class="bg-red-600 text-white text-center py-4 -mt-14" id="footer">
    <p>&copy; {{ date('Y') }} PW. All rights reserved.</p>
</footer>

<!-- Modal -->
<div id="order-ready-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
    <div class="bg-white rounded-lg p-8 text-center mx-auto">
        <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
        </svg>
        <h2 class="text-2xl mb-4">Siparişiniz hazır</h2>
        <p class="mb-4">Siparişinizi teslim alabilirsiniz.</p>
        <button
                id="close-modal"
                onclick="document.getElementById('order-ready-modal').classList.add('hidden')"
                class="bg-red-600 text-white px-4 py-2 rounded">
            Tamam
        </button>
    </div>
</div>

</body>
</html>
