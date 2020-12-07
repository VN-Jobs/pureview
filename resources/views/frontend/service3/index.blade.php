@extends('layouts.frontend3')

@section('title', __('Services page'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides">
        <div class="container-full mx-auto">
            <div class="grid grid-cols-3 gap-4">
                <div class="home-slider col-span-3">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="/images/slides/slide1.jpg" alt="Slide 1">
                                <div class="slide__overlay"></div>
                                {{-- <div class="slide__info">Slide 01</div> --}}
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/slides/slide1.jpg" alt="Slide 2">
                                <div class="slide__overlay"></div>
                                {{-- <div class="slide__info">Slide 02</div> --}}
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/slides/slide1.jpg" alt="Slide 3">
                                <div class="slide__overlay"></div>
                                {{-- <div class="slide__info">Slide 03</div> --}}
                            </div>
                        </div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next swiper-button-white"><i class="las la-angle-right la-3x"></i></div>
                        <div class="swiper-button-prev swiper-button-white"><i class="las la-angle-left la-3x"></i></div>
                    </div>
                </div>
                {{-- <div class="home-intro col-span-1">Feature Intro</div> --}}
            </div>
        </div>
    </section>

    <!-- Section: Home Call To Action -->
    <section class="home__cta bg-dark-200">
        <div class="container mx-auto">
            <div class="cta flex justify-between py-8">
                <div class="flex items-center">
                    <h2 class="text-2xl uppercase text-white">Real estate marketing professionals</h2>
                </div>
                <div class="flex items-center">
                    <button class="py-2 px-6 uppercase bg-primary text-white border border-solid border-primary hover:bg-transparent hover:text-primary rounded mb-3 sm:mb-0 mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Get Pricing</button>
                    <button class="py-2 px-6 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Book Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Services -->
    <section class="home__services pt-24">
        <div class="container-full mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl">Our services</h3>
                    <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-600">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p>
                </div>
            </div>
            <div class="services__grid py-8">
                <div class="grid grid-cols-3 gap-4">
                    <a href="{{ route('frontend.service.show') }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/1.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Real estate photography</h4>
                        </div>
                    </a>
                    <a href="{{ route('frontend.service.show') }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/2.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Drone video & photography</h4>
                        </div>
                    </a>
                    <a href="{{ route('frontend.service.show') }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/4.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Floor plans</h4>
                        </div>
                    </a>
                    <a href="{{ route('frontend.service.show') }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/5.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Virtual furniture</h4>
                        </div>
                    </a>
                    <a href="{{ route('frontend.service.show') }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/6.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Real estate videography</h4>
                        </div>
                    </a>
                    <a href="{{ route('frontend.service.show') }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/7.jpg" alt="" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>Commercial pho & videos</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Call To Action 2 -->
    {{-- <section class="home__cta2" style="background-image: url(/images/bg_cta.jpg);color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;">
        <div style="background-color: rgba(36, 41, 48,0.7);">
            <div class="container mx-auto">
                <div class="cta flex justify-between py-12">
                    <div class="max-w-3xl lg:pr-2 text-white">
                        <h2 class="text-2xl uppercase">Real estate marketing professionals</h2>
                        <p>Pure Views are the exceptional option for property specialists in need of prompt, professional and cost effective promotional solutions.</p>
                    </div>
                    <div class="flex items-center">
                        <button class="py-2 px-6 uppercase bg-primary text-white border border-solid border-primary hover:bg-transparent hover:text-primary rounded mb-3 sm:mb-0 mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Get Pricing</button>
                        <button class="py-2 px-6 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}

@endsection
