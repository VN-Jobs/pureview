<footer id="site__footer" class="site__footer site__footer__container mx-auto">
    <div class="footer__links py-12 bg-dark-300">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                <div class="footer__col footer1 text-center sm:text-left">
                    <div class="footer-col__container">
                        <div class="flex-shrink-0 flex items-center justify-center sm:justify-normal">
                            <a href="{{ route('frontend.home.index') }}">
                                <img src="{{ publicSrc($configs['logo'][0] ?? null) }}" alt="logo" style="width: 64px; height:64px;">
                            </a>
                        </div>
                        <p class="mt-2">{{ $configs['home']['how_to'][3]['description'] ?? null }}</p>
                    </div>
                </div>
                <div class="footer__col footer2">
                    <div class="footer-col__container capitalize pl-0 lg:pl-20 justify-center sm:justify-normal flex sm:block">
                        @foreach ($__menus as $menu)
                        <a class="block px-1 pt-3 text-sm font-medium leading-5 hover:text-primary focus:outline-none transition duration-150 ease-in-out" href="{{ $menu->url }}" class="hover:text-primary">
                            <i class="las la-dot-circle mr-2 text-primary"></i>
                            <span class="nav__text">{{ $menu->name }}</span>
                        </a>
                        @endforeach
                    </div>
                </div>
                <div class="footer-col footer3">
                    <div class="footer-col__container text-center">
                        <div class="mb-4">
                            <span>Contact us:</span>
                        </div>
                        <ul class="social-icons flex flex-row justify-center list-none m-auto">
                            @if (!empty($configs["facebook"]))
                            <li>
                                <a href="{{ $configs["facebook"][0] ?? null }}" class="mr-4 hover:text-primary" target="_blank" aria-label="Facebook">
                                    <i class="lab la-facebook-f la-2x"></i>
                                </a>
                            </li>
                            @endif

                            @if (!empty($configs["youtube"]))
                            <li>
                                <a href="{{ $configs["youtube"][0] ?? null}}" class="mr-4 hover:text-primary" target="_blank" aria-label="Youtube">
                                    <i class="lab la-youtube la-2x"></i>
                                </a>
                            </li>
                            @endif

                            @if (!empty($configs["linkedin"]))
                            <li>
                                <a href="{{ $configs["linkedin"][0] ?? null }}" class="mr-4 hover:text-primary" target="_blank" aria-label="Linkedin">
                                    <i class="lab la-linkedin la-2x"></i>
                                </a>
                            </li>
                            @endif

                            @if (!empty($configs["twitter"]))
                            <li>
                                <a href="{{ $configs["twitter"][0] ?? null }}" class="mr-4 hover:text-primary" target="_blank" aria-label="Twitter">
                                    <i class="lab la-twitter la-2x"></i>
                                </a>
                            </li>
                            @endif

                            @if (!empty($configs["instagram"]))
                            <li>
                                <a href="{{ $configs["instagram"][0] ?? null }}" class="mr-4 hover:text-primary" target="_blank" aria-label="Instagram">
                                    <i class="lab la-instagram la-2x"></i>
                                </a>
                            </li>
                            @endif
                        </ul>
                    </div>
                </div>

                <div class="footer-col footer3">
                    <div class="footer-col__container text-center">
                        <div class="mt-8">
                            <a href="{{ route('frontend.page.contact') }}" class="inline-flex items-center justify-center text-white py-2 px-2 uppercase bg-primary text-white border border-solid border-primary hover:bg-transparent hover:text-primary rounded mb-3 sm:mb-0 mx-auto sm:mx-0 transition-colors duration-300">
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
                    <span>{{ $configs["copyright"][0] ?? null }}</span>
                </div>
                <div class="flex w-full sm:w-6/12 justify-center sm:justify-normal mt-2 sm:mt-0">
                    <span>
                        @if (!empty($configs["phone"]))
                        <a href="tel:{{ $configs["phone"][0] ?? null }}" class="hover:text-primary mr-8"><i class="las la-phone-volume mr-2"></i>{{ $configs["phone"][0] ?? null }}</a>
                        @endif

                        @if (!empty($configs["email"]))
                        <a href="mailto:{{ $configs["email"][0] ?? null}}" class="hover:text-primary"><i class="las la-envelope-open-text mr-2"></i>Email Us</a>
                        @endif
                    </span>
                </div>
            </div>
        </div>
    </div>
</footer>
