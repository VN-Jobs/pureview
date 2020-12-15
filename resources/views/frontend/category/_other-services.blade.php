<section class="other__services pt-24">
    <div class="container mx-auto">
        <div class="justify-center text-center flex flex-wrap">
            <div class="max-w-2xl px-12 md:px-4">
                <h3 class="font-semibold uppercase text-4xl"><span style="color: #f14833;">Other</span> services</h3>
            </div>
        </div>
        <div class="block__list flex flex-wrap text-center lg:text-left py-8">
            @foreach($categories as $key => $category)
                <article class="list__item w-full{{ $key === 0 ? ' lg:w-4/12 sm:px-4 first' : ' sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0' }}">
                    <div class="list__item__wrapper{{ $key === 0 ? ' w-full sm:w-6/12 lg:w-full m-auto' : '' }}">
                        <div class="entry__image">
                            <a href="{{ route('frontend.category.show', $category->slug) }}">
                                <img class="post-img" src="{{ publicSrc($category->image_src) }}" alt="{{ $category->name }}">
                            </a>
                        </div>

                        <h4 class="entry__heading text-2xl text-primary mt-4">
                            <a href="{{ route('frontend.category.show', $category->slug) }}">
                                <span>{{ $category->name }}</span>
                            </a>
                        </h4>

                        @if (!empty($category->ceo_description))
                        <div class="entry__intro mt-4">
                            <p>{{ $category->ceo_description }} <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                        </div>
                        @endif
                    </div>
                </article>
            @endforeach
        </div>
    </div>
</section>
