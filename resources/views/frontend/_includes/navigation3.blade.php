<nav x-data="{ open: false }" class="site__navigation">
    <div class="nav-wrapper">
        <!-- Primary Navigation Menu -->
        <div class="site__navigation__primary container mx-auto">
            <div class="flex justify-between">
                <div class="flex">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="{{ route('frontend.home.index') }}">
                            <img src="/images/logo.png" alt="">
                        </a>
                    </div>

                    <!-- Navigation Links -->
                    <ul class="nav__wrapper space-x-1 sm:-my-px sm:ml-10 sm:flex">
                        <li class="nav__item{{ request()->routeIs('frontend.home.index') ? ' is--active' : '' }}">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out{{ request()->routeIs('frontend.home.index') ? ' is--active' : '' }}" href="{{ route('frontend.home.index') }}">
                                <span class="nav__text">Home Page</span>
                            </a>
                        </li>

                        <li class="nav__item has--sub">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.index') }}">
                                <span class="nav__text">Services</span>
                                <div class="ml-1">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </a>

                            <ul class="nav__sub">
                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Real Estate Photography</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Commercial Photography</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Drone Photography</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Twilight Photography</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Property developments‎</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Copywriting</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Off Site Copywriting Request</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Virtual Furniture</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">3D Rendering</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Corporate Events</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Product photography</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Studio Hire</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Corporate Portraits</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Fashion Photography</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item has--sub">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="#">
                                <span class="nav__text">Floor Plans</span>
                                <div class="ml-1">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </a>

                            <ul class="nav__sub">
                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Residential Floorplans/Siteplans</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Commercial Floorplans</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Site Surveying – Elevations</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">3D Rendering</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item has--sub">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="#">
                                <span class="nav__text">Video and Drone</span>
                                <div class="ml-1">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </a>

                            <ul class="nav__sub">
                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Real Estate Videos</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Agent Profiles Videos</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Droning Videos</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Suburb Profiles</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">3D Property Walk-Throughs</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Corporate Videos</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Promotional Videos</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Product Launch Videos</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Social Media Videos</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item has--sub">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="#">
                                <span class="nav__text">Architects</span>
                                <div class="ml-1">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </a>

                            <ul class="nav__sub">
                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Detail & Level Survey</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">3D Rendering</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item has--sub">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="#">
                                <span class="nav__text">Marketing</span>
                                <div class="ml-1">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </a>

                            <ul class="nav__sub">
                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Telemarketing</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">How Social Media Works</span>
                                    </a>
                                </li>

                                <li class="nav__item">
                                    <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.service.show') }}">
                                        <span class="nav__text">Real Estate Training Videos</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item">
                            <a class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" href="/">
                                <span class="nav__text">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
            Mobile Menu
        </div>
    </div>
</nav>
