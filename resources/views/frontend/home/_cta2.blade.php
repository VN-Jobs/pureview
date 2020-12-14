<section class="section__cta2">
    <div class="cta__container">
        <div class="container mx-auto">
            <div class="cta lg:flex lg:justify-between py-8">
                <div class="flex items-center w-full mb-4 lg:mb-0 justify-center lg:justify-normal">
                    <div class="text-center lg:text-left">
                        <h2 class="text-2xl uppercase text-white">{{ $configs['home']['how_to'][2]['title'] ?? null }}</h2>
                        <p>{{ $configs['home']['how_to'][2]['description'] ?? null }}</p>
                    </div>
                </div>
                <div class="flex items-center w-full justify-center">
                    <a href="{{ route('frontend.page.pricing') }}" class="py-2 px-6 uppercase bg-primary text-white border border-solid border-primary hover:bg-transparent hover:text-primary rounded mb-3 sm:mb-0 mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Get Pricing</a>
                    <a href="{{ route('frontend.page.contact') }}" class="py-2 px-6 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Book Now</a>
                </div>
            </div>
        </div>
    </div>
</section>
