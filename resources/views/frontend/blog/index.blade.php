@extends('layouts.frontend')

@section('title', __('Blog'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides" style="background-image: url({{ publicSrc($configs["blog"]["banner"]) }});">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-4xl mb-4">BLOG</h2>
                <p class="heading__desc"><em>{{ $configs["blog"]["description"] }}</em></p>
            </div>
        </div>
    </section>

    <section class="post__list py-20">
        <div class="container mx-auto">
            <div class="block__list flex flex-wrap text-center lg:text-left pt-8">
                @foreach ($posts as $key => $post)
                    <article class="list__item w-full{{ $key === 0 ? ' lg:w-4/12 sm:px-4 first' : ' sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0' }}">
                        <div class="list__item__wrapper{{ $key === 0 ? ' w-full sm:w-6/12 lg:w-full m-auto' : '' }}">
                            <div class="entry__image">
                                <a href="{{ route('frontend.blog.show', $post->slug) }}">
                                    <img class="post-img" src="{{ publicSrc($post->image_src) }}" alt="{{ $post->image_title }}">
                                </a>
                            </div>
                            <h4 class="entry__heading text-2xl text-primary mt-4">
                                <a href="{{ route('frontend.blog.show', $post->slug) }}">
                                    <span>{{ $post->name }}</span>
                                </a>
                            </h4>
                            <div class="entry__intro mt-4">
                                <p>{{ $post->ceo_description }} <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                            </div>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
