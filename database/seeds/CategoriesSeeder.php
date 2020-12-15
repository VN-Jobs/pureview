<?php

use Illuminate\Database\Seeder;
use App\Eloquent\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();
        $data = [
            'services',
            'Photo Editing',
            'Photo Enhancement',
            'Day To Dusk',
            'Item Removal',
            'Floor Plan',
            'Virtual Furniture',
        ];
        foreach ($data as $key => $name) {
            $index = $key+1;
            Category::create([
                'name' => $name,
                'image_src' => "seeds/products/p-0{$index}.jpg",
                'ceo_title' => 'Why fill your empty listing with virtual furniture?',
                'description' => '',
                'collection_title' => 'Our gallery products',
                'collection_intro' => 'Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.',
            ]);
        }
        if (App::environment('local')) {
            $categories = factory(Category::class, 0)->create();
        }
    }
}
