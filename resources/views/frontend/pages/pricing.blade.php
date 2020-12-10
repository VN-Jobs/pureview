@extends('layouts.frontend')

@section('title', __('Contact us'))

@section('content')
    <!-- Section: Pricing -->
    <section class="section__pricing">
        <div class="container max-w-full mx-auto py-12 px-6">
            {{-- <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">Pricing</h1> --}}
            <h3 class="font-semibold uppercase text-black text-center text-4xl mb-10">Pricing</h3>
            <p class="text-center text-lg text-gray-700 mt-2 px-6">Photo editing pricing. Contact with us!</p>
            <div class="h-1 mx-auto bg-primary w-24 opacity-75 mt-4 rounded"></div>
            <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                <div class="relative block flex flex-col md:flex-row items-center">
                    <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 bg-white rounded-lg shadow-lg md:-mr-4">
                        <div class="text-sm leading-none rounded-t-lg bg-dark-200 text-white font-semibold uppercase py-4 text-center tracking-wide">DAY TO NIGHT CONVERSION</div>

                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-6 text-black px-8 lg:px-6">
                            <h2 class="text-sm text-gray-500 text-center pb-4"><span class="text-3xl">From $5,0</span> / mo</h2>
                        </div>

                        <div class="bg-white text-black overflow-hidden">
                            <div class="flex flex-wrap mt-3 px-6">
                                <ul>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Adjusting brightest and contrast, highlighting features and lightening shadows.</span>
                                    </li>

                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Replacing outdoor dusk sky.</span>
                                    </li>

                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Turning on interior/exterior lighting and pool/garden lights.</span>
                                    </li>

                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Up to 12-24hrs Image Delivery</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="block flex items-center p-8 uppercase">
                                <a href="/register" class="mt-3 text-lg font-semibold border border-primary bg-primary w-full text-white rounded-md px-6 py-3 block shadow-xl hover:bg-white hover:text-primary text-center">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                        <div class="text-sm leading-none rounded-t-lg bg-dark-200 text-white font-semibold uppercase py-4 text-center tracking-wide">PHOTO EDITING</div>

                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-6 text-black px-8 lg:px-6">
                            <h2 class="text-sm text-gray-500 text-center pb-4"><span class="text-3xl">From $0,70</span> / mo</h2>
                        </div>

                        <div class="flex justify-start sm:justify-start px-6 mt-3">
                            <ul>
                                <li class="flex items-center">
                                    <div class="rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Free test</span>
                                </li>

                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Noise reduction</span>
                                </li>

                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">White balance, contrast, exposure, lens correction, color adjustments.</span>
                                </li>

                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Removal of Camera Flashes</span>
                                </li>

                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Removal of Minor Reflections</span>
                                </li>

                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Resizing, cropping and removing background.</span>
                                </li>

                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Up to 12-24hrs Image Delivery</span>
                                </li>
                            </ul>
                        </div>

                        <div class="block flex items-center p-8 uppercase">
                            <a href="/register" class="mt-3 text-lg font-semibold border border-primary bg-primary w-full text-white rounded-md px-6 py-3 block shadow-xl hover:bg-white hover:text-primary text-center">Book Now</a>
                        </div>
                    </div>

                    <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 bg-white rounded-lg shadow-lg md:-ml-4">
                        <div class="text-sm leading-none rounded-t-lg bg-dark-200 text-white font-semibold uppercase py-4 text-center tracking-wide">RETOUCHING</div>

                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-6 text-black px-8 lg:px-6">
                            <h2 class="text-sm text-gray-500 text-center pb-4"><span class="text-3xl">From $1,0</span> / mo</h2>
                        </div>

                        <div class="bg-white text-black overflow-hidden">
                            <div class="flex flex-wrap mt-3 pl-8 pr-6">
                                <ul>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Color correction.</span>
                                    </li>

                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Brightest/Contract Adjustment.</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Remove small spots, camera flashes, dust, glare, reflection…</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Add green grass, trees, and small objects like lamp, chair or table…</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Complete details for unfinished property. Up to 12-24hrs Image Delivery</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="block flex items-center p-8 uppercase">
                                <a href="/register" class="mt-3 text-lg font-semibold border border-primary bg-primary w-full text-white rounded-md px-6 py-3 block shadow-xl hover:bg-white hover:text-primary text-center">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Our Partners -->
    @include('frontend._includes.brands')
@endsection
