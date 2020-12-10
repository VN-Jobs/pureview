@extends('layouts.frontend')

@section('title', __('Service detail page'))

@push('sufscripts')
<script src="{{ asset('vendor/nanogallery2/jquery.nanogallery2.js?v=' . env('APP_VERSION')) }}"></script>
<script src="{{ asset('js/frontend/pages/service-detail.js?v=' . env('APP_VERSION')) }}"></script>
@endpush

@section('content')
    <!-- Section: Heading Slides -->
    {{-- <section class="heading__slides">
        <div class="heading__container mx-auto"></div>
    </section> --}}

    <section class="heading__slides">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-4xl mb-4">REAL ESTATE PHOTOGRAPHY</h2>
                <p class="heading__desc mx-auto max-w-3xl"><em>Using state-of-the-art equipment, our accomplished real estate photographers create extraordinary property images sure to capture the attention and imagination of potential buyers tenants.</em></p>
            </div>
        </div>
    </section>

    <!-- Section: Single Service -->
    <section class="single__service pt-24">
        <div class="container-full mx-auto px-0 lg:px-20">
            <div class="flex flex-col px-4 mb-10">
                <div class="ba__container">
                    <img src="https://w8.foxdsgn.com/prague/wp-content/uploads/2017/01/before.jpg" class="" alt="">

                    <div class="resize">
                        <img src="https://w8.foxdsgn.com/prague/wp-content/uploads/2017/01/after.jpg" class="" alt="">
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

            <div class="justify-center text-center flex flex-wrap grid grid-cols-1 gap-4">
                <div class="flex flex-col px-12 md:px-4">
                    <div class="service__content">
                        <p>We tame tricky exposures that can complicate images of architecture or landscape, HDR photography utilises wide dynamic ranges.</p>
                        <p>Every room is meticulously enhanced to look its photogenic best. We style your room, shift furniture and use props&nbsp;to capture the perfect ambience and ensure the saleable features of your property are highlighted in every shot. Multiple exposures are taken, blended and retouched to create a flawless and vibrant image. Photos are conveniently delivered in print and web ready formats for easy printing and uploading with 24 hours.</p>
                        <p>Our highly skilled retouching team work closely with all of our agents to make sure we showcase the property in the best light. Whether you are trying to sell or lease your Property, V-Mark Designs team of Professional Real Estate Photographers are sure to bring more buyers and potential tenants to your property to help achieve a better price. We look forward to bringing your property to life.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-full mx-auto pt-20">
            <div class="services__grid">
                <div id="showcase__gallery" data-nanogallery2='{
                    "itemsBaseURL": "/images/services/",
                    "thumbnailHeight": "auto",
                    "thumbnailWidth": "400",
                    "thumbnailLabel": {
                        "position": "overImageOnBottom"
                    },
                    "thumbnailAlignment": "center",
                    "thumbnailOpenImage": true
                }'>
                    <a href="1.jpg"
                        data-ngThumb="1.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/1.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="2.jpg"
                        data-ngThumb="2.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/2.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="4.jpg"
                        data-ngThumb="4.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/4.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="5.jpg"
                        data-ngThumb="5.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/5.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="6.jpg"
                        data-ngThumb="6.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/6.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="7.jpg"
                        data-ngThumb="7.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/7.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="1.jpg"
                        data-ngThumb="1.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/1.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="2.jpg"
                        data-ngThumb="2.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/2.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="4.jpg"
                        data-ngThumb="4.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/4.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="5.jpg"
                        data-ngThumb="5.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/5.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="6.jpg"
                        data-ngThumb="6.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/6.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                    <a href="7.jpg"
                        data-ngThumb="7.jpg"
                        class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        {{-- <img src="/images/services/7.jpg" alt="" class="w-full align-middle"> --}}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Other Services -->
    <section class="other__services pt-24">
        <div class="container mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl"><span style="color: #f14833;">Other</span> services</h3>
                </div>
            </div>
            <div class="block__list flex flex-wrap text-center lg:text-left py-8">
                <article class="list__item w-full lg:w-4/12 sm:px-4 first">
                    <div class="list__item__wrapper w-full sm:w-6/12 lg:w-full m-auto">
                        <div class="entry__image">
                            <a href="{{ route('frontend.service.show') }}">
                                <img class="post-img" src="/images/services/11.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                            </a>
                        </div>
                        <h4 class="entry__heading text-2xl text-primary mt-4">
                            <a href="{{ route('frontend.service.show') }}">
                                <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                            </a>
                        </h4>
                        <div class="entry__intro mt-4">
                            <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                        </div>
                    </div>
                </article>

                <article class="list__item w-full sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0">
                    <div class="list__item__wrapper">
                        <div class="entry__image">
                            <a href="{{ route('frontend.service.show') }}">
                                <img class="post-img" src="/images/services/22.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                            </a>
                        </div>
                        <h4 class="entry__heading text-2xl text-primary mt-4">
                            <a href="{{ route('frontend.service.show') }}">
                                <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                            </a>
                        </h4>
                        <div class="entry__intro mt-4">
                            <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                        </div>
                    </div>
                </article>

                <article class="list__item w-full sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0">
                    <div class="list__item__wrapper">
                        <div class="entry__image">
                            <a href="{{ route('frontend.service.show') }}">
                                <img class="post-img" src="/images/services/11.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
                            </a>
                        </div>
                        <h4 class="entry__heading text-2xl text-primary mt-4">
                            <a href="{{ route('frontend.service.show') }}">
                                <span>At Mario's Always Fresh Cupcake Ice Cream?</span>
                            </a>
                        </h4>
                        <div class="entry__intro mt-4">
                            <p>Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                        </div>
                    </div>
                </article>
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

    <!-- Section: Home Request -->
    <section class="home__request">
        <div class="request__form text-white py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="w-full pr-0 md:pr-4 pb-10 md:pb-0">
                        <h3 class="font-semibold uppercase text-white text-3xl mb-10">SYDNEY REAL ESTATE MARKETING PROFESSIONALS</h3>
                        <div class="text-white">
                            <p><em>PureView is the superior choice for Sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.<br></em>In one easy phone call we can arrange our experienced team of photographers, copywriters and Floor planners to make a one-off on-site visit, with guaranteed next day online delivery.</p>
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
@endsection
