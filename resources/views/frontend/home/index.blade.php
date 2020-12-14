@extends('layouts.frontend')

@section('title', __('Home page'))

@section('content')
    <!-- Section: Feature -->
    @include('frontend.home._slider')

    <!-- Section: Call To Action -->
    @include('frontend.home._cta')

    <!-- Section: Services -->
    @include('frontend.home._services')

    <!-- Section: Home Request -->
    @include('frontend.home._contact')

    <!-- Section: Latest Blog -->
    @include('frontend.home._latest-blog')

    <!-- Section: Call To Action 2 -->
    @include('frontend.home._cta2')

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
