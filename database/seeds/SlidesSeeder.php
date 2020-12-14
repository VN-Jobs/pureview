<?php

use Illuminate\Database\Seeder;
use App\Eloquent\Slide;
use App\Eloquent\Category;

class SlidesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Slide::truncate();
        $data = [
            [
                'title' => 'World class support',
                'description' => 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                'image_src' => 'seeds/slides/slide1.jpg',
                'image_title' => 'slide1.jpg',
                'category_id' => 0,
            ],
            [
                'title' => 'Photograpy creative',
                'description' => 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                'image_src' => 'seeds/slides/slide2.jpg',
                'image_title' => 'slide2.jpg',
                'category_id' => 0,
            ],
            [
                'title' => 'Awesome services',
                'description' => 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                'image_src' => 'seeds/slides/slide3.jpg',
                'image_title' => 'slide3.jpg',
                'category_id' => 0,
            ],
        ];

        app(Slide::class)->insert($data);

        if (App::environment('local')) {
            factory(Slide::class, 0)->create();
        }
    }
}
