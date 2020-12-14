<section class="section__feature">
    <div class="container-full mx-auto">
        <div class="home-slider">
            <div class="swiper__container swiper-container">
                <div class="swiper-wrapper">
                    @if (count($slides))
                        @foreach ($slides as $slide)
                        <div class="swiper-slide">
                            <img src="{{ publicSrc($slide->image_src) }}" alt="{{ $slide->title }}">
                            <div class="slide__overlay"></div>
                        </div>
                        @endforeach
                    @endif
                </div>

                <!-- Add Arrows -->
                <div class="swiper-button-next swiper-button-white">
                    <i class="las la-angle-right la-2x"></i>
                </div>
                <div class="swiper-button-prev swiper-button-white">
                    <i class="las la-angle-left la-2x"></i>
                </div>
            </div>
        </div>
    </div>
</section>
