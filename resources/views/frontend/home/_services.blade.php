<section class="section__services pt-24">
    <div class="container-full mx-auto">
        <div class="justify-center text-center flex flex-wrap">
            <div class="max-w-2xl px-12 md:px-4">
                <h3 class="font-semibold uppercase text-3xl md:text-4xl"><span style="color: #f14833;">Our</span> services</h3>
                <p class="text-lg leading-relaxed mt-4 mb-4">Pure-Views Design is the superior choice for sydney real estate marketing professionals and property developers looking to create a distinct and polished marketing campaign.</p>
            </div>
        </div>
        <div class="services__grid py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
                @foreach($categories as $category)
                    <a href="{{ route('frontend.category.show', $category->slug) }}" class="grid__item relative flex flex-col min-w-0 break-words w-full shadow-lg bg-dark-200">
                        <img src="{{ publicSrc($category->image_src) }}" alt="{{ $category->name }}" class="w-full align-middle">
                        <div class="grid__item__content p-2">
                            <h4 class="font-bold uppercase text-white"><i class="las la-dot-circle text-primary mr-2"></i>{{ $category->name }}</h4>
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
    </div>
</section>
