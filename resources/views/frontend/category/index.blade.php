@extends('layouts.frontend')

@section('title', __('Services page'))

@section('content')
    <section class="heading__slides">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-4xl mb-4">{{ $category->name }}</h2>
                <p class="heading__desc mx-auto max-w-3xl"><em>{!! str_limit($category->description, 250, '...') !!}</em></p>
            </div>
        </div>
    </section>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')

    <!-- Section: Request -->
    @include('frontend.home._contact')
@endsection
