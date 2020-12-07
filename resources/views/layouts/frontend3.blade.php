<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('frontend._includes._head')

    <!-- Fonts -->
    @include('frontend._includes._fonts3')

    <!-- Styles -->
    @include('frontend._includes._styles3')
</head>
<body>
    <div id="app" class="frontend min-h-screen bg-gray-100">
        <!-- Header -->
        @include('frontend._includes.header3')

        <!-- Page Content -->
        <main class="site__main">
            @yield('content')
        </main>

        <!-- Footer -->
        @include('frontend._includes.footer3')
    </div>

    <!-- Scripts -->
    @include('frontend._includes._scripts')
</body>
</html>
