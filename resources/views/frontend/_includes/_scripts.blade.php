{{-- <script src="{{ asset('js/frontend/manifest.js?v=' . env('APP_VERSION')) }}"></script> --}}
{{-- <script src="{{ asset('js/frontend/vendor.js?v=' . env('APP_VERSION')) }}"></script> --}}
{{-- <script src="{{ asset('js/frontend/lang/' . app()->getLocale() . '.js?v=' . env('APP_VERSION')) }}"></script> --}}
@stack('prescripts')
<script src="{{ asset('js/frontend/app.js?v=' . env('APP_VERSION')) }}"></script>
@stack('sufscripts')
