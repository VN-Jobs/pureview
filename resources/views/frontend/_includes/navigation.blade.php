<nav x-data="{ open: false }" id="site__navigation" class="site__navigation">
    <div class="nav-wrapper">
        <!-- Primary Navigation Menu -->
        <div class="site__navigation__primary container mx-auto">
            <div class="flex justify-between">
                <div class="flex w-full">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="{{ route('frontend.home.index') }}" class="site__logo py-1">
                            <img src="{{ publicSrc($configs['logo'][0] ?? null) }}" alt="logo">
                        </a>
                    </div>

                    <!-- Navigation Links -->
                    <ul class="nav__wrapper hidden space-x-1 sm:ml-10 md:flex">
                        @foreach ($__menus as $menu)
                            @if (count($menu->children))
                            <li class="nav__item has--sub">
                                <span class="nav__link inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                                    <span class="nav__text">{{ $menu->name }}</span>
                                    @include('components.svg-angle-down')
                                </span>
                                <ul class="nav__sub">
                                    @foreach ($menu->children as $subMenu)
                                    <li class="nav__item{{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}">
                                        <a class="nav__link inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out{{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}" href="{{ $subMenu->url }}">
                                            <span class="nav__text">{{ $subMenu->name }}</span>
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                            @else
                            <li class="nav__item {{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}">
                                <a class="nav__link inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out {{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}" href="{{ $menu->url }}">
                                    <span class="nav__text">{{ $menu->name }}</span>
                                </a>
                            </li>
                            @endif
                        @endforeach
                    </ul>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center md:hidden">
                    <button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-sm text-white hover:text-white bg-transparent hover:bg-transparent focus:outline-none focus:bg-transparent focus:text-white transition duration-150 ease-in-out">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{'block': open, 'hidden': ! open}" class="site__navigation__mobile hidden md:hidden p-4">
            <!-- Mobile Navigation Links -->
            <ul class="nav__wrapper sm:px-10 md:flex">
                @foreach ($__menus as $menu)
                    @if (count($menu->children))
                    <li class="nav__item has--sub">
                        <span class="nav__link inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                            <span class="nav__text">{{ $menu->name }}</span>
                            @include('components.svg-angle-down')
                        </span>
                        <ul class="nav__sub">
                            @foreach ($menu->children as $subMenu)
                            <li class="nav__item {{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}">
                                <a class="nav__link inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out{{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}" href="{{ $subMenu->url }}">
                                    <span class="nav__text">{{ $subMenu->name }}</span>
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </li>
                    @else
                    <li class="nav__item {{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}">
                        <a class="nav__link inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out {{ isActiveRoute(array_merge([$menu->url], $menu->children->pluck('url')->toArray())) }}" href="{{ $menu->url }}">
                            <span class="nav__text">{{ $menu->name }}</span>
                        </a>
                    </li>
                    @endif
                @endforeach
            </ul>
        </div>
    </div>
</nav>
