<section class="section__latest__blog pt-24">
    <div class="container mx-auto">
        <div class="justify-center text-center flex flex-wrap">
            <div class="max-w-2xl px-12 md:px-4">
                <h3 class="font-semibold uppercase text-3xl md:text-4xl"><span style="color: #f14833;">Latest</span> news</h3>
            </div>
        </div>
        <div class="block__list flex flex-wrap text-center lg:text-left py-8">
            @foreach ($posts as $key => $post)
                <article class="list__item w-full{{ $key === 0 ? ' lg:w-4/12 sm:px-4 first' : ' sm:w-6/12 lg:w-4/12 sm:px-4 mt-8 lg:mt-0' }}">
                    <div class="list__item__wrapper{{ $key === 0 ? ' w-full sm:w-6/12 lg:w-full m-auto' : '' }}">
                        <div class="entry__image">
                            <a href="{{ route('frontend.blog.show', $post->slug) }}">
                                <img class="post-img" src="{{ publicSrc($post->image_src) }}" alt="{{ $post->image_title }}">
                            </a>
                        </div>
                        <h4 class="entry__heading text-2xl text-primary mt-4">
                            <a href="{{ route('frontend.blog.show', $post->slug) }}">
                                <span>{{ $post->name }}</span>
                            </a>
                        </h4>
                        <div class="entry__intro mt-4">
                            <p>{{ $post->ceo_description }} <i style="vertical-align:bottom;margin:0 1px 1px;" class="las la-ellipsis-h"></i></p>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>
    </div>
</section>
