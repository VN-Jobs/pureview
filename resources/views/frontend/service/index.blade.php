@extends('layouts.frontend')

@section('title', __('Services page'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides">
        <div class="heading__container mx-auto"></div>
    </section>

    <!-- Section: Home Services -->
    <section class="home__services pt-24">
        <div class="container-full mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl">Our services</h3>
                    <p class="text-lg leading-relaxed mt-4 mb-4">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p>
                </div>
            </div>
            <div class="services__grid pt-8">
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

    <!-- Section: Home Our Partners -->
    <section class="home__brands pt-24">
        <div class="brands__container">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl">Our Partners</h3>
                </div>
            </div>
            <div class="container mx-auto">
                <div class="brands flex justify-between py-12">
                    <div class="swiper__brands swiper-container text-center">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="/images/brands/1.png" alt="Slide 1" class="inline-block">
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/brands/2.png" alt="Slide 1" class="inline-block">
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/brands/3.png" alt="Slide 1" class="inline-block">
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/brands/4.png" alt="Slide 1" class="inline-block">
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/brands/5.png" alt="Slide 1" class="inline-block">
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/brands/6.png" alt="Slide 1" class="inline-block">
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/brands/7.png" alt="Slide 1" class="inline-block">
                            </div>
                        </div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next">
                            <i class="las la-angle-right la-1x"></i>
                        </div>
                        <div class="swiper-button-prev">
                            <i class="las la-angle-left la-1x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Call To Action 2 -->
    {{-- <section class="home__cta2">
        <div class="cta__container">
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
