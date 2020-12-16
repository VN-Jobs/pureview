@extends('layouts.frontend')

@section('title', __('Contact us'))

@section('content')
    <!-- Section: Home Request -->
    <section class="section__request">
        <div class="request__form text-white py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="w-full pr-0 lg:pr-4 pb-10 lg:pb-0">
                        <div class="w-full pr-4">
                            <h3 class="font-semibold uppercase text-white text-2xl mb-10">Contact with us</h3>
                            <div class="text-white mb-2">
                                <p><em>{{ $configs["contact"]["description"] }}</em></p>
                            </div>
                        </div>
                        <div id="google__map">
                            <iframe src="{{ $configs['map'][0] ?? null }}" width="600" height="405" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="w-full">
                        @include('frontend._includes.contact-form')
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
