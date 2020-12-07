@extends('layouts.frontend')

@section('title', __('Home page'))

@section('content')
    <!-- Section: Home Feature -->
    <section class="home__feature">
        <div class="container-full mx-auto">
            <div class="home-slider">
                <div class="swiper__container swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/images/slides/slide2.jpg" alt="Slide 1">
                            <div class="slide__overlay"></div>
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/slides/slide3.jpg" alt="Slide 2">
                            <div class="slide__overlay"></div>
                        </div>
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next swiper-button-white">
                        <i class="las la-angle-right la-2x"></i>
                    </div>
                    <div class="swiper-button-prev swiper-button-white">
                        <i class="las la-angle-left la-2x"></i>
                    </div>
                </div>
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
                    <p class="text-lg leading-relaxed mt-4 mb-4">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p>
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

    <!-- Section: Home Request -->
    <section class="home__request">
        <div class="request__form text-white py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 gap-4">
                    <div class="w-full pr-4">
                        <h3 class="font-semibold uppercase text-white text-3xl mb-10">SYDNEY REAL ESTATE MARKETING PROFESSIONALS</h3>
                        <div class="text-white">
                            <p><em>V-Mark Design is the superior choice for Sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.<br></em>In one easy phone call we can arrange our experienced team of photographers, copywriters and Floor planners to make a one-off on-site visit, with guaranteed next day online delivery.</p>
                            <p>In one easy phone call we can arrange our experienced team of photographers, copywriters and Floor planners to make a one-off on-site visit, with guaranteed next day online delivery.</p>
                            <p>We offer a range of additional services to complement your marketing campaign including videos, virtual tours, aerial photography, photo retouching, graphic design and printed brochures and signboards.</p>
                            <button class="py-2 px-6 mt-8 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded block sm:inline-block transition-colors duration-300">Learn More</button>
                        </div>
                    </div>
                    <div class="w-full">
                        <form action="" method="POST">
                            @csrf

                            <div class="grid grid-cols-2 gap-4">
                                <div class="w-full">
                                    <div class="form-group">
                                        <label for="company" class="block uppercase tracking-wide font-bold mb-2">Company</label>
                                        <input type="text" id="company" name="company" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>

                                    <div class="form-group">
                                        <label for="name" class="block uppercase tracking-wide font-bold mb-2">Name</label>
                                        <input type="text" id="name" name="name" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>
                                </div>

                                <div class="w-full">
                                    <div class="form-group">
                                        <label for="email" class="block uppercase tracking-wide font-bold mb-2">Email</label>
                                        <input type="text" id="email" name="email" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>

                                    <div class="form-group">
                                        <label for="phone" class="block uppercase tracking-wide font-bold mb-2">Phone</label>
                                        <input type="text" id="phone" name="phone" value="" size="40" class="form-control bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4 mb-3" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="comment" class="block uppercase tracking-wide font-bold mb-2">Comments</label>
                                <textarea id="comment" name="comment" cols="40" rows="10" class="bg-transparent border appearance-none block w-full bg-grey-lighter rounded py-2 px-4"></textarea>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="py-2 px-6 mt-8 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded block sm:inline-block transition-colors duration-300">Instant Quote Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Services Gallery -->
    <section class="home__services__gallery py-6">
        <div class="container-full px-6 mx-auto">
            <div class="services__gallery">
                <div href="#" class="grid__sizer"></div>
                <div class="grid__item grid__item--width2 p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/1.jpg);padding-top: calc((100% + 6px) * 0.4 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/1.jpg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/2.png);padding-top: calc((100% + 6px) * 0.8 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/2.png" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/3.jpg);padding-top: calc((100% + 6px) * 0.8 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/3.jpg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item grid__item--width2 p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/4.jpeg);padding-top: calc((100% + 6px) * 0.8);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/4.jpeg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item grid__item--width2 p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/5.jpg);padding-top: calc((100% + 6px) * 0.4 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/5.jpg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item grid__item--width2 p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/6.jpeg);padding-top: calc((100% + 6px) * 0.4 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/6.jpeg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item grid__item--width2 p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/7.jpeg);padding-top: calc((100% + 6px) * 0.4 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/7.jpeg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>

                <div class="grid__item grid__item--width2 p-1">
                    <div class="item__image" style="overflow: hidden;">
                        <a href="#">
                            <div style="background-image: url(/images/gallery/8.jpeg);padding-top: calc((100% + 6px) * 0.4 - 3.5px);background-size: cover;background-position: center center;">
                                <img src="/images/gallery/8.jpeg" alt="" style="display: none;">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Latest Blog -->
    <section class="home__blog pt-24">
        <div class="container mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl">Latest news</h3>
                </div>
            </div>
            <div class="latest__blog flex flex-wrap py-8">
                <article class="latest__blog__item w-4/12 md:w-12/12 px-4 first">
                    <div class="entry__image">
                        <a href="#">
                            <img class="post-img" src="/images/blog/1.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                        </a>
                    </div>
                    <h4 class="entry__heading text-2xl text-primary mt-4">
                        <a href="#">
                            <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                        </a>
                    </h4>
                    <div class="entry__intro mt-4">
                        <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                    </div>
                </article>

                <article class="latest__blog__item w-4/12 md:w-12/12 px-4 first">
                    <div class="entry__image">
                        <a href="#">
                            <img class="post-img" src="/images/blog/1.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                        </a>
                    </div>
                    <h4 class="entry__heading text-2xl text-primary mt-4">
                        <a href="#">
                            <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                        </a>
                    </h4>
                    <div class="entry__intro mt-4">
                        <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                    </div>
                </article>

                <article class="latest__blog__item w-4/12 md:w-12/12 px-4 first">
                    <div class="entry__image">
                        <a href="#">
                            <img class="post-img" src="/images/blog/1.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                        </a>
                    </div>
                    <h4 class="entry__heading text-2xl text-primary mt-4">
                        <a href="#">
                            <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                        </a>
                    </h4>
                    <div class="entry__intro mt-4">
                        <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Section: Home Call To Action 2 -->
    <section class="home__cta2">
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
@endsection
