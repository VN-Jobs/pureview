@extends('layouts.frontend')

@section('title', __('Service detail page'))

@push('sufscripts')
<script src="{{ asset('vendor/nanogallery2/jquery.nanogallery2.js?v=' . env('APP_VERSION')) }}"></script>
<script src="{{ asset('js/frontend/pages/service-detail.js?v=' . env('APP_VERSION')) }}"></script>
@endpush

@section('content')
    <section class="heading__slides">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-4xl mb-4">{{ $category->name }}</h2>
                <p class="heading__desc mx-auto max-w-3xl"><em>{!! str_limit($category->description, 250, '...') !!}</em></p>
            </div>
        </div>
    </section>

    <!-- Section: Single Service -->
    <section class="section__services pt-24">
        <div class="container-full mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-3xl md:text-4xl"><span style="color: #f14833;">Our</span> services</h3>
                    <p class="text-lg leading-relaxed mt-4 mb-4">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p>
                </div>
            </div>
            <div class="services__grid py-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/1.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Real estate photography</h4>
                        </div>
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/2.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Drone video & photography</h4>
                        </div>
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/4.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Floor plans</h4>
                        </div>
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/5.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Virtual furniture</h4>
                        </div>
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/6.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Real estate videography</h4>
                        </div>
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/7.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Commercial pho & videos</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Other Services -->
    {{-- @include('frontend.category._other-services') --}}

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')

    <!-- Section: Request -->
    @include('frontend.home._contact')
@endsection
