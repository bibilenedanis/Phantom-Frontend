@extends('_layouts.main')

@section('body')
    @include('_components.header', ['backurl' => '/'])

    <div class="p-4">
        <div class="bg-gray-100 p-6 rounded-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <div class="bg-white p-4 rounded-full mx-auto w-24 h-24 flex items-center justify-center">
                <span class="text-2xl font-bold">59sn</span>
            </div>
        </div>
    </div>
    
    <div class="h-24"></div>
@endsection
