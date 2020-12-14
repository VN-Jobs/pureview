@extends('layouts.frontend')

@section('title', __('Blog detail'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides" style="background-image: url({{ publicSrc($configs["blog"]["banner"]) }});">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-2xl mb-4">Blog Detail</h2>
                <p class="heading__desc"><em>{{ $configs["blog"]["description"] }}</em></p>
            </div>
        </div>
    </section>

    <!-- Section: Request -->
    <div class="py-20">
        <div class="container mx-auto">
            <article class="post">
                <div class="w-full mb-10">
                    <img src="{{ publicSrc($post->image_src) }}" alt="{{ $post->name }}">
                </div>

                <div class="w-full">
                    <h3 class="post__title font-semibold uppercase text-2xl mb-4">{{ $post->name }}</h3>
                    <div class="post__content">
                        {!! $post->description !!}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
