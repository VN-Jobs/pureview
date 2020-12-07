<footer id="site__footer" class="site__footer site__footer__container mx-auto">
    <div class="footer__links py-12 bg-dark-300">
        <div class="container mx-auto">
            <div class="grid grid-cols-3 gap-4">
                <div class="footer__col footer1">
                    <div class="footer-col__container">
                        <x-nav-link href="{{ route('frontend.home.index') }}" class="hover:text-primary">
                            <span class="nav__text">{{ __('Home') }}</span>
                        </x-nav-link>
                        <x-nav-link href="#" class="hover:text-primary">
                            <span class="nav__text">{{ __('Services') }}</span>
                        </x-nav-link>
                        <x-nav-link href="#" class="hover:text-primary">
                            <span class="nav__text">{{ __('Booking') }}</span>
                        </x-nav-link>
                        <x-nav-link href="#" class="hover:text-primary">
                            <span class="nav__text">{{ __('News') }}</span>
                        </x-nav-link>
                        <x-nav-link href="#" class="hover:text-primary">
                            <span class="nav__text">{{ __('Contact') }}</span>
                        </x-nav-link>
                    </div>
                </div>
                <div class="footer__col footer2">
                    <div class="footer-col__container">
                        <ul class="social-icons flex flex-row list-none ml-auto">
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
                    <div class="footer-col__container">
                        <a href="#" class="inline-flex float-right items-center justify-center text-white py-2 px-6 uppercase bg-primary text-white border border-solid border-primary hover:bg-transparent hover:text-primary rounded mb-3 sm:mb-0 mx-auto sm:mx-2 transition-colors duration-300">
                            <i class="las la-fingerprint la-2x mr-2"></i>
                            <span>Get In Touch</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer__copyright py-2">
        <div class="container mx-auto">
            <div class="copyright flex justify-between">
                <div class="flex">
                    <span>© Copyright 2020&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#" class="hover:text-primary">Pure Views</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All Rights Reserved.</span>
                </div>
                <div class="flex">
                    <span><a href="tel:+1234567890" class="hover:text-primary"><i class="las la-phone-volume"></i>&nbsp;&nbsp;0123 4567 890</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:demo@domain.com" class="hover:text-primary"><i class="las la-envelope-open-text"></i>&nbsp;&nbsp;Email Us</a></span>
                </div>
            </div>
        </div>
    </div>
</footer>
