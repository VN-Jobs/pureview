<footer id="site__footer" class="site__footer site__footer__container mx-auto">
    <div class="footer__links py-12 bg-dark-300">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                <div class="footer__col footer1 text-center sm:text-left">
                    <div class="footer-col__container">
                        <div class="flex-shrink-0 flex items-center justify-center sm:justify-normal">
                            <a href="{{ route('frontend.home.index') }}">
                                <img src="/images/logo.png" alt="" style="width: 64px; height:64px;">
                            </a>
                        </div>
                        <p class="mt-2">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p>
                    </div>
                </div>
                <div class="footer__col footer2">
                    <div class="footer-col__container pl-0 lg:pl-20 justify-center sm:justify-normal flex sm:block">
                        <a class="block px-1 pt-3 text-sm font-medium leading-5 hover:text-primary focus:outline-none transition duration-150 ease-in-out" href="{{ route('frontend.home.index') }}" class="hover:text-primary">
                            <i class="las la-dot-circle mr-2 text-primary"></i>
                            <span class="nav__text">{{ __('Home') }}</span>
                        </a>
                        <a class="block px-1 pt-3 text-sm font-medium leading-5 hover:text-primary focus:outline-none transition duration-150 ease-in-out" href="#" class="hover:text-primary">
                            <i class="las la-dot-circle mr-2 text-primary"></i>
                            <span class="nav__text">{{ __('Services') }}</span>
                        </a>
                        <a class="block px-1 pt-3 text-sm font-medium leading-5 hover:text-primary focus:outline-none transition duration-150 ease-in-out" href="#" class="hover:text-primary">
                            <i class="las la-dot-circle mr-2 text-primary"></i>
                            <span class="nav__text">{{ __('Booking') }}</span>
                        </a>
                        <a class="block px-1 pt-3 text-sm font-medium leading-5 hover:text-primary focus:outline-none transition duration-150 ease-in-out" href="#" class="hover:text-primary">
                            <i class="las la-dot-circle mr-2 text-primary"></i>
                            <span class="nav__text">{{ __('News') }}</span>
                        </a>
                        <a class="block px-1 pt-3 text-sm font-medium leading-5 hover:text-primary focus:outline-none transition duration-150 ease-in-out" href="#" class="hover:text-primary">
                            <i class="las la-dot-circle mr-2 text-primary"></i>
                            <span class="nav__text">{{ __('Contact') }}</span>
                        </a>
                    </div>
                </div>
                <div class="footer-col footer3">
                    <div class="footer-col__container text-center">
                        <div class="mb-4">
                            <span>Contact us:</span>
                        </div>
                        <ul class="social-icons flex flex-row justify-center list-none m-auto">
                            <li>
                                <a href="#" class="mr-4 hover:text-primary" target="_blank" aria-label="Facebook">
                                    <i class="lab la-facebook-f la-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 hover:text-primary" target="_blank" aria-label="Instagram">
                                    <i class="lab la-instagram la-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 hover:text-primary" target="_blank" aria-label="Vimeo">
                                    <i class="lab la-vimeo la-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-primary" target="_blank" aria-label="Youtube">
                                    <i class="lab la-youtube la-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer-col footer3">
                    <div class="footer-col__container text-center">
                        <div class="mt-8">
                            <a href="#" class="inline-flex items-center justify-center text-white py-2 px-2 uppercase bg-primary text-white border border-solid border-primary hover:bg-transparent hover:text-primary rounded mb-3 sm:mb-0 mx-auto sm:mx-0 transition-colors duration-300">
                                <i class="las la-fingerprint la-2x mr-2"></i>
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer__copyright py-2">
        <div class="container mx-auto">
            <div class="copyright block sm:flex justify-between">
                <div class="flex w-full sm:w-6/12 justify-center sm:justify-normal">
                    <span>© Copyright 2020 <a href="{{ route('frontend.home.index') }}" class="text-primary">Pure Views.</a> All Rights Reserved.</span>
                </div>
                <div class="flex w-full sm:w-6/12 justify-center sm:justify-normal mt-2 sm:mt-0">
                    <span><a href="tel:+84366811991" class="hover:text-primary mr-8"><i class="las la-phone-volume mr-2"></i>(+84) 366 811 991</a><a href="mailto:demo@domain.com" class="hover:text-primary"><i class="las la-envelope-open-text mr-2"></i>Email Us</a></span>
                </div>
            </div>
        </div>
    </div>
</footer>
