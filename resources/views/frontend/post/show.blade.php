@extends('layouts.frontend')

@section('title', __('Blog detail'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-2xl mb-4">At Mario's Always Fresh Cupcake Ice Cream?</h2>
                {{-- <p class="heading__desc"><em>PureView is specialized in working with professional visualizations for the real estate</em></p> --}}
            </div>
        </div>
    </section>

    <!-- Section: Request -->
    <div class="py-20">
        <div class="container mx-auto">
            <article class="post">
                <div class="w-full mb-10">
                    <img src="/images/blog/4.jpg" alt="PureView">
                </div>

                <div class="w-full">
                    <h3 class="post__title font-semibold uppercase text-2xl mb-4">At Mario's Always Fresh Cupcake Ice Cream?</h3>
                    <div class="post__content">
                        <p class="mb-2">Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                        <p class="mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
