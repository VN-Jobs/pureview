@extends('layouts.frontend')

@section('title', __('About us'))

@section('content')
    <!-- Section: Heading Slides -->
    <section class="heading__slides" style="background-image: url({{ publicSrc($configs["about"]["banner"]) }});">
        <div class="heading__container flex items-center mx-auto">
            <div class="container mx-auto text-center">
                <h2 class="heading__title font-semibold uppercase text-white text-3xl md:text-4xl mb-4">About us</h2>
                <p class="heading__desc"><em>{{ $configs["about"]["description"] }}</em></p>
            </div>
        </div>
    </section>

    <!-- Section: About Intro -->
    <section class="about__intro">
        <div class="py-12 lg:py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center lg:text-left">
                    <div class="w-full">
                        <img src="{{ publicSrc($configs["about"]["image"]) }}" alt="{{ $configs["name"][0] ?? null }}" class="mx-auto lg:mx-0 mb-10 lg:mb-0">
                    </div>

                    <div class="w-full pr-4">
                        <div class="w-full pr-4">
                            <h3 class="font-semibold uppercase text-2xl mb-10">WHO ARE WE?</h3>
                            <div class="mb-2">
                                <p>{{ $configs["about"]["information"] }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: About Teams -->
    {{-- <section class="about__teams">
        <div class="py-12 lg:py-20">
            <div class="container mx-auto">
                <div class="block__team block sm:flex">
                    <div class="team__intro justify-center items-center text-center flex flex-wrap w-full sm:w-4/12 lg:w-3/12 bg-gray-200">
                        <div class="p-4">
                            <h3 class="font-semibold uppercase text-3xl md:text-4xl"><span style="color: #f14833;">Our</span> Teams</h3>
                            <div class="h-1 mx-auto bg-primary w-24 opacity-75 mt-4 rounded"></div>
                        </div>
                    </div>

                    <div class="team__content flex w-full sm:w-8/12 lg:w-9/12 pl-0 sm:pl-4 pt-4 sm:pt-0 justify-center sm:justify-start">
                        <div class="team__item shadow-sm" style="background-image: url(/images/teams/1.jpeg);"></div>
                        <div class="team__item ml-4 shadow-sm" style="background-image: url(/images/teams/2.jpeg);"></div>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
