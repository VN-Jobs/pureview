<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('frontend._includes._head')

    <!-- Fonts -->
    @include('frontend._includes._fonts')

    <!-- Styles -->
    @include('frontend._includes._styles')
</head>
<body>
    <div id="app" class="frontend min-h-screen bg-gray-100">
        <!-- Header -->
        @include('frontend._includes.header')

        <!-- Page Content -->
        <main class="site__main">
            @yield('content')
        </main>

        <!-- Footer -->
        @include('frontend._includes.footer')
    </div>

    <!-- Scripts -->
    @include('frontend._includes._scripts')
</body>
</html>
