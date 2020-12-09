@extends('layouts.frontend')

@section('title', __('Blog'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-4xl mb-4">BLOG</h2>
                <p class="heading__desc"><em>PureView's team and other experts offer their best advice, insights, and how-to's. All to help you improve the presentation of your property marketing.</em></p>
            </div>
        </div>
    </section>

    <section class="contents">
        <article class="latest__blog__item w-4/12 md:w-12/12 px-4 first">
            <div class="entry__image">
                <a href="{{ route('frontend.post.show') }}">
                    <img class="post-img" src="/images/blog/1.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                </a>
            </div>
            <h4 class="entry__heading text-2xl text-primary mt-4">
                <a href="{{ route('frontend.post.show') }}">
                    <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                </a>
            </h4>
            <div class="entry__intro mt-4">
                <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
            </div>
        </article>
        <article class="py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 gap-4">
                    <div class="w-full">
                        <img src="/images/about.jpg" alt="PureView">
                    </div>

                    <div class="w-full pr-4">
                        <div class="w-full pr-4">
                            <h3 class="font-semibold uppercase text-2xl mb-10">Realtyedits Real estate photo editing service</h3>
                            <div class="mb-2">
                                <p>Realtyedits  is a real estate photo editing team based in Vietnam. Founded in 2017.
Realtyedits  is one of the world's leading real estate editing teams specializing in editing, processing images and 3D images.
Customers of Realtyedits are real estate agents and real estate marketing companies in Europe, the United States and Australia. We is always ready to provide fast service, innovative solutions and best quality.

Based on low cost but high quality production, fast turnaround time, well-educated and hard-working staff, as well as advanced technology and updates, we are ready to provide you with Good and cheap quality graphic packages to accelerate your brokerage service. To receive a free prototype, details of our quote or any other information, please contact us.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
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
