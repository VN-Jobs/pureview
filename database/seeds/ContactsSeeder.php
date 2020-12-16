<?php

use Illuminate\Database\Seeder;
use App\Eloquent\Contact;

class ContactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contact::truncate();
        app(Contact::class)->insert([
            [
                'first_name' => 'Brittany',
                'last_name' => 'Shields',
                'company' => 'Ray White',
                'email' => 'brittany@raywhite.com',
                'message' => 'I was amazed when I saw the email come through saying that it was ready for download, it was so fast! The website is the easiest I have used, great job!',
                'is_home' => true,
                'avatar' => 'seeds/brands/1.png',
            ],
            [
                'first_name' => 'Aimee',
                'last_name' => 'Berridge',
                'company' => 'realestate.com.au',
                'email' => 'aimee@realestate.com.au',
                'message' => 'Working with Box Brownie at both an agency level and now purely online advertising level. Their services are fast, effectively and efficient, but most of all affordable, which we all know is an Agents and Admin’s dream! I have only excellent things to say about the team. They are the online support team you have been looking for and they are really, so easy to use.',
                'is_home' => true,
                'avatar' => 'seeds/brands/2.png',
            ],
            [
                'first_name' => 'Craig',
                'last_name' => 'Phillips',
                'company' => 'Robeson & Associates',
                'email' => 'brand3@robeson-associates.com',
                'message' => 'Hi team, very happy so far but really questioning how good a job my photographer is doing! The service your company provides is pretty mind-blowing!',
                'is_home' => true,
                'avatar' => 'seeds/brands/3.png',
            ],
            [
                'first_name' => 'Craig',
                'last_name' => 'Phillips',
                'company' => 'Robeson & Associates',
                'email' => 'brand4@robeson-associates.com',
                'message' => 'Hi team, very happy so far but really questioning how good a job my photographer is doing! The service your company provides is pretty mind-blowing!',
                'is_home' => true,
                'avatar' => 'seeds/brands/4.png',
            ],
            [
                'first_name' => 'Craig',
                'last_name' => 'Phillips',
                'company' => 'Robeson & Associates',
                'email' => 'brand5@robeson-associates.com',
                'message' => 'Hi team, very happy so far but really questioning how good a job my photographer is doing! The service your company provides is pretty mind-blowing!',
                'is_home' => true,
                'avatar' => 'seeds/brands/5.png',
            ],
            [
                'first_name' => 'Craig',
                'last_name' => 'Phillips',
                'company' => 'Robeson & Associates',
                'email' => 'brand6@robeson-associates.com',
                'message' => 'Hi team, very happy so far but really questioning how good a job my photographer is doing! The service your company provides is pretty mind-blowing!',
                'is_home' => true,
                'avatar' => 'seeds/brands/6.png',
            ],
        ]);
        if (App::environment('local')) {
            factory(Contact::class, 50)->create();
        }
    }
}
