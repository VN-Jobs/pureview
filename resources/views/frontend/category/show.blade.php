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
                <p class="heading__desc mx-auto max-w-3xl"><em>{!! str_limit($category->ceo_description, 250, '...') !!}</em></p>
            </div>
        </div>
    </section>

    <!-- Section: Single Service -->
    <section class="single__service pt-24">
        <div class="container mx-auto px-0">
            <div class="flex flex-col max-w-7xl mx-auto px-4 mb-10">
                <!-- Main after/before slides -->
                <div class="swiper-container gallery-top">
                    <div class="swiper-wrapper">
                        @foreach ($services as $service)
                        <div class="swiper-slide">
                            <div class="ba__container">
                                <img src="{{ publicSrc($service->image_before_src) }}" class="" alt="{{ $service->image_before_title }}">

                                <div class="resize">
                                    <img src="{{ publicSrc($service->image_after_src) }}" class="" alt="{{ $service->image_after_title }}">
                                </div>

                                <span class="handle">
                                    <span class="handle__wrapper">
                                        <i class="las la-arrows-alt-h"></i>
                                    </span>
                                </span>
                                <a href="#" class="button prev"><i class="las la-long-arrow-alt-left mr-2"></i>BEFORE</a>
                                <a href="#" class="button reset"><i class="las la-grip-lines-vertical mr-2"></i>RESET</a>
                                <a href="#" class="button next"><i class="las la-long-arrow-alt-right mr-2"></i>AFTER</a>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>

                <!-- Thumbs slides -->
                <div class="swiper-container gallery-thumbs swiper__nav__style">
                    <div class="swiper-wrapper">
                        @foreach ($services as $service)
                        <div class="swiper-slide">
                            <img src="{{ publicSrc($service->image_before_src) }}" class="" alt="{{ $service->image_before_title }}">
                        </div>
                        @endforeach
                    </div>
                    <div class="swiper-button-next">
                        <i class="las la-angle-right la-1x"></i>
                    </div>
                    <div class="swiper-button-prev">
                        <i class="las la-angle-left la-1x"></i>
                    </div>
                </div>
            </div>

            <div class="justify-center text-center flex flex-wrap grid grid-cols-1 gap-4">
                <div class="flex flex-col px-12 md:px-4">
                    <div class="service__content">
                        {!! $category->description !!}
                    </div>
                </div>
            </div>
        </div>

        {{-- <div class="container-full mx-auto pt-20">
            <div class="services__grid">
                <div id="showcase__gallery" data-nanogallery2='{
                    "itemsBaseURL": "/",
                    "thumbnailHeight": "auto",
                    "thumbnailWidth": "400",
                    "thumbnailLabel": {
                        "position": "overImageOnBottom"
                    },
                    "thumbnailAlignment": "center",
                    "thumbnailOpenImage": true
                }'>
                    @foreach ($services as $value)
                    <a href="{{ publicSrc($value->image_after_src) }}"
                        data-ngThumb="{{ publicSrc($value->image_after_src) }}"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                    </a>
                    @endforeach
                </div>
            </div>
        </div> --}}
    </section>

    <!-- Section: Other Services -->
    @include('frontend.category._other-services')

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')

    <!-- Section: Request -->
    @include('frontend.home._contact')
@endsection
