<section class="section__brands pt-12 md:pt-24 pb-0 md:pb-12">
    <div class="brands__container">
        <div class="justify-center text-center flex flex-wrap">
            <div class="max-w-2xl px-12 md:px-4">
                <h3 class="font-semibold uppercase text-3xl md:text-4xl"><span style="color: #f14833;">Our</span> Partners</h3>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="brands flex justify-between py-12">
                <div class="swiper__brands swiper-container text-center">
                    <div class="swiper-wrapper">
                        @foreach ($__partners as $partner)
                        <div class="swiper-slide">
                            <img style="width:150px; height: 100px" src="{{ publicSrc($partner->avatar) }}" alt="{{ $partner->company }}" class="inline-block">
                        </div>
                        @endforeach
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next">
                        <i class="las la-angle-right la-1x"></i>
                    </div>
                    <div class="swiper-button-prev">
                        <i class="las la-angle-left la-1x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
