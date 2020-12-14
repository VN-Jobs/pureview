<section class="section__request">
    <div class="request__form text-white py-20">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="w-full pr-0 md:pr-4 pb-10 md:pb-0">
                    <h3 class="font-semibold uppercase text-white text-3xl mb-10">{{ $configs['home']['how_to'][1]['title'] ?? null }}</h3>
                    <div class="text-white">
                        <p>{{ $configs['home']['how_to'][1]['description'] ?? null }}</p>
                        <button class="py-2 px-6 mt-8 uppercase text-white border border-solid border-white hover:bg-white hover:text-primary rounded block sm:inline-block transition-colors duration-300">Learn More</button>
                    </div>
                </div>
                <div class="w-full">
                    @include('frontend._includes.contact-form')
                </div>
            </div>
        </div>
    </div>
</section>
