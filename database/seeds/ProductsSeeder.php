<?php

use Illuminate\Database\Seeder;
use App\Eloquent\Product;
use App\Eloquent\Category;
use Carbon\Carbon;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();
        $categories = app(Category::class)->where('type', 'product')->get(['id']);
        foreach ($categories as $item) {
            $data = [
                [
                    'category_id' => $item->id,
                    'name' => 'LIVINGROOM',
                    'description' => 'Often the first room you walk into, a living area is a popular place for families and friends to gather, watch TV or just relax. Show buyers how the space can work by adding a virtual couch with chaise, a TV with beautiful view on the screen and a trendy coffee table. Seeing how a space can work will help buyers imagine themselves living in the home.',
                    'image_before_src' => 'seeds/products/1b.jpg',
                    'image_after_src' => 'seeds/products/1a.jpg',
                    'image_before_title' => 'seeds/products/1b.jpg',
                    'image_after_title' => 'seeds/products/1a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'BEDROOM',
                    'description' => 'Bedrooms without furniture can look rather drab and much smaller than they really are. Adding a bed, side table and chest of drawers can demonstrate just how big the room is and add life to the previously lifeless space.',
                    'image_before_src' => 'seeds/products/2b.jpg',
                    'image_after_src' => 'seeds/products/2a.jpg',
                    'image_before_title' => 'seeds/products/2b.jpg',
                    'image_after_title' => 'seeds/products/2a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'KITCHEN',
                    'description' => 'The heart of the home, take advantage of the opportunity to declutter and restyle the kitchen to attract more buyers. A clean kitchen with modern styling will help a buyer imagine spending time with their family, cooking, eating and bonding in the central room of the home.',
                    'image_before_src' => 'seeds/products/3b.jpg',
                    'image_after_src' => 'seeds/products/3a.jpg',
                    'image_before_title' => 'seeds/products/3b.jpg',
                    'image_after_title' => 'seeds/products/3a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'OUTDOOR',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a three-piece garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/4b.jpg',
                    'image_after_src' => 'seeds/products/4a.jpg',
                    'image_before_title' => 'seeds/products/4b.jpg',
                    'image_after_title' => 'seeds/products/4a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'Awesome',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a three-piece garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/5b.jpg',
                    'image_after_src' => 'seeds/products/5a.jpg',
                    'image_before_title' => 'seeds/products/5b.jpg',
                    'image_after_title' => 'seeds/products/5a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'Essential',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a three-piece garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/6b.jpg',
                    'image_after_src' => 'seeds/products/6a.jpg',
                    'image_before_title' => 'seeds/products/6b.jpg',
                    'image_after_title' => 'seeds/products/6a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'Flowers',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a essential garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/7b.jpg',
                    'image_after_src' => 'seeds/products/7a.jpg',
                    'image_before_title' => 'seeds/products/7b.jpg',
                    'image_after_title' => 'seeds/products/7a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'Utilised',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a three-piece garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/8b.jpg',
                    'image_after_src' => 'seeds/products/8a.jpg',
                    'image_before_title' => 'seeds/products/8b.jpg',
                    'image_after_title' => 'seeds/products/8a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'Timber',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a three-piece garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/9b.jpg',
                    'image_after_src' => 'seeds/products/9a.jpg',
                    'image_before_title' => 'seeds/products/9b.jpg',
                    'image_after_title' => 'seeds/products/9a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'category_id' => $item->id,
                    'name' => 'Photos',
                    'description' => 'Great curb appeal is essential when selling a home and it’s important in photos, too. Take this chance to show buyers just how cute a three-piece garden setting can be in the front yard or add a timber bench near the flowers to show how the front yard can be utilised.',
                    'image_before_src' => 'seeds/products/10b.jpg',
                    'image_after_src' => 'seeds/products/10a.jpg',
                    'image_before_title' => 'seeds/products/10b.jpg',
                    'image_after_title' => 'seeds/products/10a.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
            ];
            Product::insert($data);
        }
    }
}
