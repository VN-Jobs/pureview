@extends('layouts.frontend')

@section('title', __('Service detail page'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides">
        <div class="heading__container mx-auto"></div>
    </section>

    <!-- Section: Home Call To Action -->
    {{-- <section class="home__cta bg-dark-200">
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
    </section> --}}

    <!-- Section: Home Services -->
    <section class="home__services pt-24">
        <div class="container-full mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl mb-10">REAL ESTATE PHOTOGRAPHY</h3>
                    {{-- <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-600">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p> --}}
                    <p><em>Using state-of-the-art equipment, our accomplished real estate photographers create extraordinary property&nbsp;images sure to capture the attention and imagination of potential buyers tenants.</em></p>
                    <div class="mt-2"><p style="text-align: center;">We tame tricky exposures that can complicate images of architecture or landscape, HDR photography utilises wide dynamic ranges.</p>
                    <p style="text-align: center;">Every room is meticulously enhanced to look its photogenic best. We style your room, shift furniture and use props&nbsp;to capture the perfect ambience and ensure the saleable features of your property are highlighted in every shot. Multiple exposures are taken, blended and retouched to create a flawless and vibrant image. Photos are conveniently delivered in print and web ready formats for easy printing and uploading with 24 hours.</p>
                    <p style="text-align: center;">Our highly skilled retouching team work closely with all of our agents to make sure we showcase the property in the best light. Whether you are trying to sell or lease your Property, V-Mark Designs team of Professional Real Estate Photographers are sure to bring more buyers and potential tenants to your property to help achieve a better price. We look forward to bringing your property to life.</p>
                    </div>
                </div>
            </div>
            <div class="services__grid py-8">
                <div class="grid grid-cols-3 gap-1">
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/1.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/2.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/4.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/5.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/6.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/7.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/1.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/2.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/4.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/5.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/6.jpg" alt="" class="w-full align-middle">
                    </a>
                    <a href="#" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="/images/services/7.jpg" alt="" class="w-full align-middle">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Home Latest Blog -->
    <section class="home__blog pt-24">
        <div class="container mx-auto">
            <div class="justify-center text-center flex flex-wrap">
                <div class="max-w-2xl px-12 md:px-4">
                    <h3 class="font-semibold uppercase text-4xl">Other services</h3>
                </div>
            </div>
            <div class="latest__blog flex flex-wrap items-center py-8">
                <article class="latest__blog__item w-4/12 md:w-12/12 px-4 first">
                    <div class="entry__image">
                        <a href="#">
                            <img class="post-img" src="/images/services/11.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
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
                            <img class="post-img" src="/images/services/22.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
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
                            <img class="post-img" src="/images/services/11.jpg" alt="At Mario's Always Fresh Cupcake Ice Cream?">
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
@endsection
