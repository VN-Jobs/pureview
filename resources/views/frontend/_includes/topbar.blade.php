<div class="site__topbar text-sm">
    <div class="container mx-auto">
        <div class="flex justify-between py-1">
            <!-- Topbar left -->
            <div class="flex">
                <ul class="social-icons flex flex-row list-none ml-auto">
                    @if (!empty($configs["facebook"]))
                    <li>
                        <a href="{{ $configs["facebook"][0] ?? null }}" class="mr-2" target="_blank" aria-label="Facebook">
                            <i class="lab la-facebook-f la-lg"></i>
                        </a>
                    </li>
                    @endif

                    @if (!empty($configs["youtube"]))
                    <li>
                        <a href="{{ $configs["youtube"][0] ?? null}}" class="mr-2" target="_blank" aria-label="Youtube">
                            <i class="lab la-youtube la-lg"></i>
                        </a>
                    </li>
                    @endif

                    @if (!empty($configs["linkedin"]))
                    <li>
                        <a href="{{ $configs["linkedin"][0] ?? null }}" class="mr-2" target="_blank" aria-label="Linkedin">
                            <i class="lab la-linkedin la-lg"></i>
                        </a>
                    </li>
                    @endif

                    @if (!empty($configs["twitter"]))
                    <li>
                        <a href="{{ $configs["twitter"][0] ?? null }}" class="mr-2" target="_blank" aria-label="Twitter">
                            <i class="lab la-twitter la-lg"></i>
                        </a>
                    </li>
                    @endif

                    @if (!empty($configs["instagram"]))
                    <li>
                        <a href="{{ $configs["instagram"][0] ?? null }}" target="_blank" aria-label="Instagram">
                            <i class="lab la-instagram la-lg"></i>
                        </a>
                    </li>
                    @endif
                </ul>
            </div>

            <!-- Topbar Right -->
            <div class="flex items-center">
                @if (!empty($configs["phone"]))
                <a href="tel:{{ $configs["phone"][0] ?? null }}">
                    <i class="las la-headset"></i>
                    <span>Call Us Today! {{ $configs["phone"][0] ?? null }}</span>
                </a>
                @endif
            </div>
        </div>
    </div>
</div>
