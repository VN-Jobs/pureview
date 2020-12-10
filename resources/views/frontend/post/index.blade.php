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

    <section class="post__list py-20">
        <div class="container mx-auto">
            <div class="block__list flex flex-wrap text-center lg:text-left pt-8">
                <article class="list__item w-full lg:w-4/12 sm:px-4 mb-8 first">
                    <div class="list__item__wrapper list__item__wrapper w-full sm:w-6/12 lg:w-full m-auto">
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
                    </div>
                </article>

                <article class="list__item w-full sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0 mb-8">
                    <div class="list__item__wrapper">
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
                    </div>
                </article>

                <article class="list__item w-full sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0 mb-8">
                    <div class="list__item__wrapper">
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
                    </div>
                </article>

                <article class="list__item w-full lg:w-4/12 sm:px-4 mb-8 first">
                    <div class="list__item__wrapper list__item__wrapper w-full sm:w-6/12 lg:w-full m-auto">
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
                    </div>
                </article>

                <article class="list__item w-full sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0 mb-8">
                    <div class="list__item__wrapper">
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
                    </div>
                </article>

                <article class="list__item w-full sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0 mb-8">
                    <div class="list__item__wrapper">
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
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
