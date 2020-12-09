@extends('layouts.frontend')

@section('title', __('About us'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-4xl mb-4">About us</h2>
                <p class="heading__desc"><em>PureView is specialized in working with professional visualizations for the real estate</em></p>
            </div>
        </div>
    </section>

    <!-- Section: About Intro -->
    <section class="about__intro">
        <div class="py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 gap-4">
                    <div class="w-full">
                        <img src="/images/about.jpg" alt="PureView">
                    </div>

                    <div class="w-full pr-4">
                        <div class="w-full pr-4">
                            <h3 class="font-semibold uppercase text-2xl mb-10">WHO ARE WE?</h3>
                            <div class="mb-2">
                                <p>PureView  is a real estate photo editing team based in Vietnam. Founded in 2017.
PureView  is one of the world's leading real estate editing teams specializing in editing, processing images and 3D images.
Customers of PureView are real estate agents and real estate marketing companies in Europe, the United States and Australia. We is always ready to provide fast service, innovative solutions and best quality.

Based on low cost but high quality production, fast turnaround time, well-educated and hard-working staff, as well as advanced technology and updates, we are ready to provide you with Good and cheap quality graphic packages to accelerate your brokerage service. To receive a free prototype, details of our quote or any other information, please contact us.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: About Teams -->
    <section class="about__teams">
        <div class="py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 gap-4">
                    <div class="justify-center items-center text-center flex flex-wrap w-full bg-gray-200">
                        <div class="max-w-2xl p-4">
                            <h3 class="font-semibold uppercase text-4xl"><span style="color: #f14833;">Our</span> Teams</h3>
                            <div class="h-1 mx-auto bg-primary w-24 opacity-75 mt-4 rounded"></div>
                        </div>
                    </div>

                    <div class="w-full">
                        <img src="/images/teams/1.jpeg" alt="1" style="display: inline-block; height: 200px;">
                        <img src="/images/teams/2.jpeg" alt="2" style="display: inline-block; height: 200px; margin-left: 10px;">
                    </div>

                    <div class="w-full">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Our Partners -->
    <section class="home__brands pt-24">
        <div class="brands__container">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl"><span style="color: #f14833;">Our</span> Partners</h3>
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
@endsection
