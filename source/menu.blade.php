@extends('_layouts.main')

@section('body')
    @include('_components.header', ['backurl' => '/'])

    <div id="menu-app">
        <div class="swiper slider">
            <div class="swiper-wrapper" id="category-slider-items">
                <div class="flex justify-around w-full">
                    @for($i=0; $i<8; $i++)
                        <div class="p-2 rounded-lg">
                            <div class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded dark:bg-gray-700 mb-2">
                                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-4"></div>
                        </div>
                    @endfor
                </div>
            </div>
        </div>

        <div class="p-4 space-y-4" id="menu">
            <!-- Loader -->
            <div id="category-${product.category_id}">
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
                <div id="product-row">
                    @for($i=0; $i<4; $i++)
                        <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between m-2 animate-pulse mb-4">
                            <div class="flex items-center justify-center w-32 h-24 bg-gray-300 rounded dark:bg-gray-700">
                                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-72"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-60"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-72"></div>
                            </div>
                            <div class="w-1/4"></div>
                            <div class="w-1/4"></div>
                            <div class="flex items-center">
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-6 mb-4"></div>
                            </div>
                        </div>
                    @endfor
                </div>
            </div>
        </div>
    </div>
@endsection
